import { Router, Request, Response } from "express";
import { Product_Types } from '../entity/productTypes'
import { Roles } from '../entity/roles'
import authenticateToken from "../controllers/authenticateToken";
import { failed400, failed401, failed403, failed500, success } from "../utils/responses";


const router = Router();


router.post('/types', authenticateToken, async (req: Request, res: Response) => {
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
            const {name, description} = req.body;
            const newProductType = Product_Types.create({
                name: name,
                description: description
            })

            await newProductType.save();

            res.json({
                ...success,
                newProductType: {
                    id: newProductType.id,
                    name: newProductType.name,
                    description: newProductType.description,
                    products: newProductType.products
                }
            })
        } else {
            res.status(400).json(failed400)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})

router.get('/types', authenticateToken, async (req: Request, res: Response) => {
    try {
        const types = await Product_Types.find({
            relations:{
                products:true
            }
        })
        if(types !== null)
        {
            res.json({
                ...success,
                productTypes: types
            })
        }
        else{
            res.status(401).json(failed401)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


router.delete('/types', authenticateToken, async (req: Request, res: Response) => {
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
            const {name} = req.body;
            const ProductType = await Product_Types.delete({
                name: name
            })
            res.json({
                ...success,
                deletedProductType: ProductType
            })
        } else {
            res.status(403).json(failed403)
        }
    } catch (error) {
        res.status(500).json(failed500)
    }
})


export default router;