import { Router, Request, Response } from "express";
import { Roles } from "../entity/roles";
import { failed400, failed500, success } from "../utils/responses";


const router = Router();


router.post('/roles', async (req: Request, res: Response) => {
    try {
        const {roleName} = await req.body;
        try {
            const newRole = Roles.create({
                roleName: roleName
            })

            await newRole.save();

            res.json({
                ...success,
                newRoleProfile: newRole
            })
        } catch (error) {
            res.status(400).json(failed400)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})



router.get('/roles', async (req: Request, res: Response) => {
    try {
        const roles = await Roles.find();
        res.json({
            ...success,
            Roles: roles
        })
    } catch (error) {
        res.status(500).json(failed500)
    }
})


export default router;