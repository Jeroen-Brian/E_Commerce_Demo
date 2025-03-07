import { Router, Request, Response, NextFunction } from "express";
import { Roles } from "../entity/roles";


const router = Router();


router.post('/roles', async (req: Request, res: Response) => {
    console.log("Roles tester");
    try {
        const {roleName} = await req.body;
        try {
            const newRole = Roles.create({
                roleName: roleName
            })

            await newRole.save();

            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Role created successfully!",
                newRoleProfile: newRole
            })
        } catch (error) {
            res.status(400).json({
                Status: "Failed",
                Status_Code: 400,
                Status_Message: "Role already exists."
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



router.get('/roles', async (req: Request, res: Response) => {
    try {
        const roles = await Roles.find();
        res.json({
            Status: "Success",
            Status_Code: 200,
            Status_Message: "Roles retrieved successfully!",
            Roles: roles
        })
    } catch (error) {
        res.status(500).json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error.",
        })
    }
})


  

export default router;

