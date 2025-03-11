import { Router, Request, Response } from "express";
import { Products } from '../entity/products'
import { Roles } from '../entity/roles'
import { Users } from "../entity/users";
import { Product_Types } from "../entity/productTypes";
import authenticateToken from "../controllers/authenticateToken";
import { failed401, failed403, failed500, success } from "../utils/responses";


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
            try {
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
                    ...success,
                    newProduct: newProduct
                })
            } catch (error) {
                res.status(403).json(failed403)
            }
        } else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
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
                ...success,
                products: products
            })
        }
        else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
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
                    ...success,
                    deletedProductType: Product
                })
            } catch (error) {
                res.status(403).json(failed403)
            }
        } else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


export default router;