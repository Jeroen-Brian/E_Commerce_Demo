import { Router, Request, Response, NextFunction} from "express";

import { Products } from '../entity/products'
import { Users } from "../entity/users";
import { Wishlist } from "../entity/wishlist";
import authenticateToken from "../controllers/authenticateToken";
import { failed400, failed401, failed403, failed500, success } from "../utils/responses";


const router = Router();


router.post('/wishlist', authenticateToken, async (req: Request, res: Response) => {
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

            const wishList = await Wishlist.find({
                where: { 
                    userId: req.user.User[0].id
                }, 
                relations:{ 
                    prodId:true
                }
            });

            if (wishList.length == 0){
                const newWishlist = Wishlist.create({
                    prodId: prod,
                    userId: req.user.User[0].id
                })
                await Wishlist.find({
                    where:{
                        userId: req.user.User[0].id
                    },
                    relations:{
                        user:true,
                        prodId:true
                    }
                })
    
                await newWishlist.save();
    
                res.json({
                    ...success,
                    Wishlist: newWishlist
                })
            } else {
                try {
                    const newWishlistProd = await Wishlist.findOne({
                        where: { 
                            userId: req.user.User[0].id
                        }, 
                        relations:{ 
                            user:true, 
                            prodId:true
                        }
                    });
    
                    newWishlistProd?.prodId.push(prod[0]);
                    
                    await Wishlist.find({
                        where:{ 
                            userId: req.user.User[0].id
                        },
                        relations:{
                            user:true,
                            prodId:true
                        }
                    })
    
                    await newWishlistProd?.save()
    
                    res.json({
                        ...success,
                        Wishlist: newWishlistProd
                    })
                } catch (error) {
                    res.status(403).json(failed403)
                }
            }
        } else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


router.get('/wishlist', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await Users.find({
            where:{
                id: req.user.User[0].id
            }
        })
        if(user !== null){
            const wishList = await Wishlist.find({
                where:{
                    userId: req.user.User[0].id
                },
                relations:{
                    user:true,
                    prodId:true
                }
            })
            res.json({
                ...success,
                Wishtlist: wishList
            })
        }
        else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})



router.delete('/wishlist', authenticateToken, async (req: Request, res: Response) => {
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

            const wishList = await Wishlist.find({where: { userId: req.user.User[0].id}, relations:{ prodId:true}});

            if (wishList[0].prodId.length == 0){
                res.status(403).json(failed403)
            } else {
                const wishlistProd = await Wishlist.findOne({
                    where: { 
                        userId: req.user.User[0].id
                    }, 
                    relations:{ 
                        user:true, 
                        prodId:true
                    }
                });
                const pos = wishlistProd?.prodId.indexOf(prod[0]);
                if( pos !== undefined){
                    wishlistProd?.prodId.splice(pos, 1)
                }
                await Wishlist.find({
                    where:{ 
                        userId: req.user.User[0].id
                    },
                    relations:{
                        user:true,
                        prodId:true
                    }
                })

                await wishlistProd?.save()

                res.json({
                    ...success,
                    Wishlist: wishlistProd
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