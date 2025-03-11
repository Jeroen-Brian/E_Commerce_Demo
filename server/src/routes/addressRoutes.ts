import { Router, Request, Response } from "express";

import { Users } from "../entity/users";
import { Addresses } from "../entity/addresses";
import authenticateToken from "../controllers/authenticateToken";
import { addressValidation } from "../middleware/validators";
import { failed400, failed401, failed403, failed500, success } from "../utils/responses";



const router = Router();


router.post('/address', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if (user !== null){
            try {
                const {address, addressType} = req.body;

                if (addressValidation(address)) {
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
                        ...success,
                        newAddress: newAdr
                    }) 
                } else {
                    res.status(400).json(failed400)
                }
            } catch (error) {
                res.json({
                    ...failed403,
                    Status_Message: "Address Type is already present."
                })
            }
        } else {
            res.status(401).json(failed401)
        }  
    } catch (error) {
        res.status(500).json(failed500)
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
                ...success,
                Addresses: addresses
            })
        }
        else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
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
                    ...success,
                    deletedProduct: delAdr
                })
            } catch (error) {
                res.status(403).json({
                    ...failed403,
                    Status_Message: "Address not present."
                })
            }
        } else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


export default router;