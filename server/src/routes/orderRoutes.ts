import { Router, Request, Response } from "express";

import { Users } from "../entity/users";
import { User_Cart } from "../entity/userCart";
import authenticateToken from "../controllers/authenticateToken";
import { Order } from "../entity/order";
import { Addresses } from "../entity/addresses";
import { failed400, failed401, failed403, failed500, success } from "../utils/responses";


const router = Router();


router.post('/order', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if (user !== null){
            const {addressType} = req.body;
            try {
                const adr = await Addresses.find({
                    where:{
                        addressType: addressType
                    }
                })
    
                console.log(adr);
    
                const cart = await User_Cart.find({
                    where:{
                        userId: req.user.User[0].id
                    }
                })
    
                console.log(cart);
    
                const newOrder = Order.create({
                    adrId: adr[0].id,
                    cartId: cart[0].id,
                    userId: req.user.User[0].id
                })
                await Order.find({
                    where:{
                        userId: req.user.User[0].id
                    },
                    relations:{
                        user:true,
                        cart:{
                            products:true
                        },
                        address:true
                    }
                })
    
                await newOrder.save();
    
                res.json({
                    ...success,
                    newOrder: newOrder
                })
            } catch (error) {
                res.status(400).json(failed400)
            }
        } else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


router.get('/order', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if(user !== null){
            const order = await Order.find({
                where:{
                    userId: req.user.User[0].id
                },
                relations:{
                    user:true,
                    cart:{
                        products:true
                    },
                    address:true
                }
            })
            res.json({
                ...success,
                Order: order
            })
        }
        else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


router.delete('/order', async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if (user !== null){
            try {
                const delOrder = await Order.delete({
                    userId: req.user.User[0].id
                })

                res.json({
                    ...success,
                    deletedOrder: delOrder
                })
            } catch (error) {
                res.status(403).json({
                    ...failed403,
                    Status_Message: "Order not present."
                })
            }
        }
        else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


export default router;