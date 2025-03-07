import { Router, Request, Response, NextFunction } from "express";

import { Users } from "../entity/users";
import { User_Cart } from "../entity/userCart";
import authenticateToken from "../controllers/authenticateToken";
import { Order } from "../entity/order";
import { Addresses } from "../entity/addresses";


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
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Order Placed!",
                    newProduct: newOrder
                })
            } catch (error) {
                res.status(400).json({
                    Status: "Failed",
                    Status_Code: 400,
                    Status_Message: "Address is invalid."
                })
            }
        } else{
            res.status(403).json({
                Status: "Failed",
                Status_Code: 403,
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
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Wishlist retrieved successfully!",
                Order: order
            })
        }
        else{
            res.status(401).json({
                Status: "Failed",
                Status_Code: 401,
                Status_Message: "Could not get details due to inauthorisation. Please try again.",
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
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Order deleted successfully!",
                    deletedProduct: delOrder
                })
            } catch (error) {
                res.status(400).json({
                    Status: "Failed",
                    Status_Code: 400,
                    Status_Message: "Order not present."
                })
            }
        }
        else{
            res.status(403).json({
                Status: "Failed",
                Status_Code: 403,
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

  

export default router;

