import { Router, Request, Response, NextFunction} from "express";

import { Products } from '../entity/products'
import { Users } from "../entity/users";
import { Wishlist } from "../entity/wishlist";
import authenticateToken from "../controllers/authenticateToken";


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
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Product added to wishlist!",
                    newWishlist: newWishlist
                })
            } else {
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
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Product added to wishlist!",
                    Wishlist: newWishlistProd
                })
            }
        } else{
            res.status(403).json({
                Status: "Failed",
                Status_Code: 403,
                Status_Message: "Product already in wishlist."
            })
        }
    } catch (error) {
        res.status(500).json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error."
        })
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
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Wishlist retrieved successfully!",
                Wishtlist: wishList
            })
        }
        else{
            res.status(401).json({
                Status: "Failed",
                Status_Code: 401,
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
                res.status(400).json({
                    Status: "Failed",
                    Status_Code: 400,
                    Status_Message: "Nothing to remove in Wishlist."
                })
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
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Product deleted from wishlist!",
                    Wishlist: wishlistProd
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
            Status_Message: "Server error."
        })
    }
})

  

export default router;

