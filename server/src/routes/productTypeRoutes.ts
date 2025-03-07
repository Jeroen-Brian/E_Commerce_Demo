import { Router, Request, Response, NextFunction } from "express";
import { Product_Types } from '../entity/productTypes'
import { Roles } from '../entity/roles'
import authenticateToken from "../controllers/authenticateToken";


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
                Status: "Success",
                Status_Code: 200,
                Status_Message: "New Product Type added successfully!",
                newProductType: newProductType
            })
        } else {
            res.status(400).json({
                Status: "Failed",
                Status_Code: 400,
                Status_Message: "Product type already available."
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
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Product Types retrieved successfully!",
                productTypes: types
            })
        }
        else{
            res.status(401).json({
                Status: "Failed",
                Status_Code: 401,
                Status_Message: "Authorisation error.",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Status: "Failed",
            Status_Code: 500,
            Status_Message: "Server error.",
        })
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
                Status: "Success",
                Status_Code: 200,
                Status_Message: "Product Type deleted successfully!",
                product: ProductType
            })
        } else {
            res.status(400).json({
                Status: "Failed",
                Status_Code: 400,
                Status_Message: "Product type not present."
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

