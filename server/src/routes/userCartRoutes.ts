import { Router, Request, Response, NextFunction } from "express";

import { Products } from '../entity/products'
import { Users } from "../entity/users";
import { User_Cart } from "../entity/userCart";
import authenticateToken from "../controllers/authenticateToken";


const router = Router();


router.post('/cart', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if (user !== null){
            const {prodName} = req.body;
            const prod = await Products.find({
                where:{
                    prodName: prodName
                }
            })

            const cart = await User_Cart.find({
                where:{ 
                    userId: req.user.User[0].id
                },
                relations:{ 
                    products:true, 
                    user:true
                }
            });

            if (cart.length == 0) {
                const newCartItem = User_Cart.create({
                    products: prod,
                    userId: req.user.User[0].id
                })
                await User_Cart.find({
                    where:{
                        userId: req.user.User[0].id
                    },
                    relations:{
                        user:true,
                        products:true
                    }
                })

                await newCartItem.save();

                res.json({
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Product added to cart!",
                    newCartItem: newCartItem
                })
            } else {
                const newCartItem = await User_Cart.findOne({
                    where: { 
                        userId: req.user.User[0].id
                    },
                    relations: { 
                        user:true, 
                        products:true
                    }
                });

                newCartItem?.products.push(prod[0]);
                await User_Cart.find({
                    where:{
                        userId: req.user.User[0].id
                    },
                    relations:{
                        user: true,
                        products: true
                    }
                })

                await newCartItem?.save()

                res.json({
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Product added to cart!",
                    UserCart: newCartItem
                })
            }
        } else{
            res.status(403).json({
                Status: "Failed",
                Status_Code: 403,
                Status_Message: "Product already in cart."
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


router.get('/cart', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if(user !== null){
            const cart = await User_Cart.find({
                where:{
                    userId: req.user.User[0].id
                },
                relations:{
                    user:true,
                    products: true
                }
            })
            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Cart retrieved successfully!",
                Cart: cart
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
        res.json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error.",
        })
    }
})


router.delete('/cart', async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if (user !== null){
            const {prodName} = req.body;
            const prod = await Products.find({
                where:{
                    prodName: prodName
                }
            })

            const cart = await User_Cart.find({
                where: { 
                    userId: req.user.User[0].id
                }, 
                relations:{
                    products:true, 
                    user: true
                }
            });

            if (cart[0].products.length == 0) {
                res.status(400).json({
                    Status: "Failed",
                    Status_Code: 400,
                    Status_Message: "Nothing to remove in Cart.",
                })
            } else {
                const cartProd = await User_Cart.findOne({
                    where: { 
                        userId: req.user.User[0].id
                    },
                    relations:{ 
                        user:true, 
                        products:true
                    }
                });

                const pos = cartProd?.products.indexOf(prod[0]);
                if( pos !== undefined){
                    cartProd?.products.splice(pos, 1)
            
                    await User_Cart.find({
                        where:{ 
                            userId: req.user.User[0].id
                        },
                        relations:{
                            user:true,
                            products:true
                        }
                    })

                    await cartProd?.save()

                    res.json({
                        Status: "Success",
                        Status_Code: 200,
                        Status_Message: "Product deleted from cart!",
                        Wishlist: cartProd
                    })
                } else {
                    res.json({
                        Status: "Failed",
                        Status_Code: 200,
                        Status_Message: "Product not in cart.",
                    })
                }
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

  

export default router;

