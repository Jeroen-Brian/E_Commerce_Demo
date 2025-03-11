import { Router, Request, Response } from "express";
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { Users } from '../entity/users';
import { Roles } from "../entity/roles";
import authenticateToken from "../controllers/authenticateToken";
import { emailValidation, passwordValidation } from "../middleware/validators";
import { success, failed400, failed401, failed403, failed500 } from '../utils/responses';
import * as mailer from 'nodemailer'
import { google } from "googleapis";
import { template } from "../views/template";


declare var process : {
    env: {
      SECRET_ACCESS_TOKEN: string,
      CLIENT_ID: string,
      CLIENT_SECRET: string,
      REDIRECT_URI: string,
      REFRESH_TOKEN: string
    }
  }

dotenv.config();

const  oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})


const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
    try {
        const {userName, email, password, roleId} = req.body;
        if (emailValidation(email) && passwordValidation(password)) {
            try {
                const newUser = Users.create({
                    userName: userName,
                    email: email,
                    password: password,
                    roleId: roleId
                })
    
                await Users.find({
                    where: { id: roleId},
                    relations: { role: true}
                })
    
                await newUser.save();

                try {
                    const oAuthAccessToken = await oAuth2Client.getAccessToken()

                    const transport = mailer.createTransport({
                        service: 'gmail',
                        auth: {
                            type: 'OAuth2',
                            user: 'jerrybrian105@gmail.com',
                            clientId: process.env.CLIENT_ID,
                            clientSecret: process.env.CLIENT_SECRET,
                            refreshToken: process.env.REFRESH_TOKEN,
                            // accessToken: oAuthAccessToken
                        }
                    })

                    const mailOptions = {
                        from: 'JEROEN <jerrybrian105@gmail.com>',
                        to: email,
                        subject: `Welcome, ${userName}!`,
                        // text: "Hi there!, Your account has successfully been created with this email ID.",
                        html: template
                    }

                    const result = await transport.sendMail(mailOptions)

                    res.json({
                        ...success,
                        NewUserProfile:{ 
                            id: newUser.id,
                            name: newUser.userName,
                            email: newUser.email,
                            role: newUser.role,
                            result: result
                        }
                    })
                } catch (error) {
                    console.log(error)
                    res.status(403).json({
                        ...failed403,
                        Status_Message: "Email could not be sent."
                    })
                }
            } catch (error) {
                res.status(403).json({
                    ...failed403,
                    Status_Message: "Email already used."
                })
            }
        } else {
            res.status(400).json({
                ...failed400,
                Status_Message: "Email or password invalid."
            })
        }
        
    } catch (error) {
        res.status(500).json(failed500)
    }
})


router.post('/login', async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const {email, password} = req.body;
        const user = await Users.find({
            where:{
                email: email,
                password: password
            }
        })
        console.log(user)
            
        if(user == null){
            res.status(401).json({
                ...failed401,
                Status_Message: "Wrong Email or Password entered. Please try again.",
            })
        }
        else{
            const accessToken = jwt.sign({User: user}, process.env.SECRET_ACCESS_TOKEN)
            res.json({
                ...success,
                authentication_Token: accessToken
            })
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})



router.get('/profile', authenticateToken, async (req: Request, res: Response) => {
    try {
        const allUser = await Users.find({
            where:{
                email: req.user.User[0].email,
                password: req.user.User[0].password
            },
            relations:{
                role: true
            }
        })
        
        if(allUser == null){
            res.status(401).json({
                ...failed401,
                Status_Message: "Wrong Email or Password entered. Please try again.",
            })
        }
        else{
            res.json({
                ...success,
                Users: {
                    id: allUser[0].id,
                    name: allUser[0].userName,
                    email: allUser[0].email,
                    password: allUser[0].password,
                    role: allUser[0].role.roleName
                }
            })
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


router.delete('/profile', authenticateToken, async (req: Request, res: Response) => {
    try {
        try {
            const delUser = await Users.delete({
                email: req.user.User[0].email,
                password: req.user.User[0].password
            })
            
            res.json({
                ...success,
                Users: delUser
            })
        } catch (error) {
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


router.get('/profile/all', authenticateToken, async (req: Request, res: Response) => {
    try {
        const adminId = await Roles.find({
            where:[{
                roleName: 'admin'
            }]
        })
        if (req.user.User[0].id == adminId[0].roleName) {
            const allUser = await Users.find()
            res.json({
                ...success,
                Users: allUser
            })
        }
        else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


export default router;