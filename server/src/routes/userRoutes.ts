import { Router, Request, Response, NextFunction } from "express";
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { Users } from '../entity/users';
import { Roles } from "../entity/roles";
import authenticateToken from "../controllers/authenticateToken";
import { Or } from "typeorm";


declare var process : {
    env: {
      SECRET_ACCESS_TOKEN: string
    }
  }
dotenv.config();




const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
    try {
        const {userName, email, password, roleId} = req.body;
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

            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Logged in successfully!",
                NewUserProfile: newUser
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                Status: "Failed",
                Status_Code: 400,
                Status_Message: "Email already used."
            })
        }
    } catch (error) {
        res.status(500).json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error.",
        })
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
                Status: "Failed",
                Status_Code: 401,
                Status_Message: "Wrong Email or Password entered. Please try again.",
            })
        }
        else{
            const accessToken = jwt.sign({User: user}, process.env.SECRET_ACCESS_TOKEN)
            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Logged in successfully!",
                authentication_Token: accessToken
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error.",
        })
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
                Status: "Failed",
                Status_Code: 401,
                Status_Message: "Wrong Email or Password entered. Please try again.",
            })
        }
        else{
            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Profile obtained successfully!",
                Users: allUser
            })
        }
    } catch (error) {
        res.status(500).json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error.",
        })
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
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Logged in successfully!",
                Users: delUser
            })
            // }
        } catch (error) {
            res.status(400).json({
                Status: "Failed",
                Status_Code: 400,
                Status_Message: "Authorization error."
            })
        }
    } catch (error) {
        res.status(500).json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error.",
        })
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
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Profile obtained successfully!",
                Users: allUser
            })
        }
        else{
            res.status(400).json({
                Status: "Failed",
                Status_Code: 400,
                Status_Message: "Authorization error.",
            })
        }
    } catch (error) {
        res.status(500).json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error.",
        })
    }
})
    

  

export default router;

