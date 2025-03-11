import { Router, Request, Response } from "express";
import { Products } from '../entity/products'
import { Users } from "../entity/users";
import { User_Cart } from "../entity/userCart";
import authenticateToken from "../controllers/authenticateToken";
import { failed400, failed401, failed403, failed500, success } from "../utils/responses";


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
                    ...success,
                    newCartItem: newCartItem
                })
            } else {
                try {
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
                        ...success,
                        UserCart: newCartItem
                    })
                } catch (error) {
                    res.status(403).json({
                        ...failed403,
                        Status_Message: "Product already in cart."
                    })
                }
            }
        } else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
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
                ...success,
                Cart: cart
            })
        }
        else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.json(failed500)
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
                res.status(403).json(failed403)
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

                    res.json(success)
                } else {
                    res.status(400).json({
                        ...failed400,
                        Status_Message: "Product not in cart.",
                    })
                }
            }
        } else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})
  

export default router;