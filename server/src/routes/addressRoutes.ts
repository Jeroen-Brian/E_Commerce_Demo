import { Router, Request, Response, NextFunction } from "express";

import { Users } from "../entity/users";
import { Addresses } from "../entity/addresses";
import authenticateToken from "../controllers/authenticateToken";



const router = Router();


router.post('/address', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if (user !== null){
            const {address, addressType} = req.body;

            const newAdr = Addresses.create({
                address: address,
                addressType: addressType,
                userId: req.user.User[0].id
            })

            await Addresses.find({
                where:{
                    userId: req.user.User[0].id
                },
                relations:{
                    user:true
                }
            })

            await newAdr.save();

            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Address stored!",
                newAddress: newAdr
            })
        } else {
            res.status(400).json({
                Status: "Failed",
                Status_Code: 400,
                Status_Message: "Address Type is already present."
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


router.get('/address', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if(user !== null){
            const addresses = await Addresses.find({
                where:{
                    userId: req.user.User[0].id
                },
                relations:{
                    user:true
                }
            })
            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Addresses retrieved successfully!",
                Addresses: addresses
            })
        }
        else{
            res.status(401).json({
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


router.delete('/address', async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        
        if (user !== null){
            try {
                const { addressType } = req.body
                const delAdr = await Addresses.delete({
                    addressType: addressType
                })

                res.json({
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Address deleted successfully!",
                    deletedProduct: delAdr
                })
            } catch (error) {
                res.status(400).json({
                    Status: "Failed",
                    Status_Code: 400,
                    Status_Message: "Address not present."
                })
            }
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

