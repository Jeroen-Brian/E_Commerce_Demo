import { Router, Request, Response, NextFunction } from "express";

import { Products } from '../entity/products'
import { Roles } from '../entity/roles'
import { Users } from "../entity/users";
import { Product_Types } from "../entity/productTypes";
import authenticateToken from "../controllers/authenticateToken";


const router = Router();

router.post('/types/products', authenticateToken, async (req: Request, res: Response) => {
    try {
        const adminId = await Roles.find({
            where:[{
                roleName: 'admin'
            },
            {
                roleName: 'superAdmin'
            }]
        })
        if (req.user.User[0].roleId === adminId[0].id){
            const {prodName, cost, description, prodType} = req.body;

            const productType = await Product_Types.find({
                where:{
                    name: prodType
                }
            })

            const newProduct = Products.create({
                prodName: prodName,
                cost: cost,
                description: description,
                prodType: productType[0].id
            })

            await Product_Types.find({
                where:{
                    name: prodType
                },
                relations: { products: true}
            })

            await newProduct.save();

            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "New Product added successfully!",
                newProductType: newProduct
            })
        } else{
            res.status(400).json({
                Status: "Failed",
                Status_Code: 400,
                Status_Message: "Product already available."
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


router.get('/types/products', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = Users.find({
            where:{
                id: req.user.id
            }
        })
        if(user !== null){
            const products = await Products.find({
                relations:{
                    productType: true
                }
            })
            res.json({
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Pproducts retrieved successfully!",
                products: products
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


router.delete('/types/products', authenticateToken, async (req: Request, res: Response) => {
    try {
        const adminId = await Roles.find({
            where:[{
                roleName: 'admin'
            },
            {
                roleName: 'superAdmin'
            }]
        })
        if (req.user.User[0].roleId === adminId[0].id){
            try {
                const {prodName} = req.body;
                const Product = await Products.delete({
                    prodName: prodName
                })

                res.json({
                    Status: "Success",
                    Status_Code: 200,
                    Status_Message: "Product deleted successfully!",
                    deletedProductType: Product
                })
            } catch (error) {
                res.status(400).json({
                    Status: "Failed",
                    Status_Code: 400,
                    Status_Message: "Product not present."
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

