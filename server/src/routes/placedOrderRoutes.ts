// import { Router, Request, Response, NextFunction } from "express";

// import { Users } from "../entity/users";
// import authenticateToken from "../controllers/authenticateToken";
// import { Order } from "../entity/order";
// import { Placed_Orders } from "../entity/placedOrders";


// const router = Router();


// router.post('/order/placed', authenticateToken, async (req: Request, res: Response) => {
//     try {
//         const user = await Users.find({
//             where:{
//                 id: req.user.User[0].id
//             }
//         })
//         if (user !== null){
//             try {
//                 const order = await Order.find({
//                     where:{
//                         userId: req.user.User[0].id
//                     }
//                 })

//                 console.log(order);

//                 const orderHistory = await Placed_Orders.find({
//                     where:{
//                         userId: req.user.User[0].id
//                     },
//                     relations:{
//                         ordId: true
//                     }
//                 });

//                 if (orderHistory.length == 0) {
//                     const newOrder = Placed_Orders.create({
//                         ordId: order,
//                         userId: req.user.User[0].id
//                     })

//                     await Placed_Orders.find({
//                         where:{
//                             userId: req.user.User[0].id
//                         },
//                         relations:{
//                             user: true,
//                             ordId: true
//                         }
//                     })

//                     await newOrder.save();

//                     res.json({
//                         Status: "Success",
//                         Status_Code: 200,
//                         Status_Message: "Order Placed!",
//                         newProduct: newOrder
//                     })
//                 } else {
//                     const newOrder = await Placed_Orders.findOne({
//                         where:{
//                             userId: req.user.User[0].id
//                         },
//                         relations:{
//                             user: true,
//                             ordId:true
//                         }
//                     });

//                     newOrder?.ordId.push(order[0]);

//                     await Placed_Orders.find({
//                         where:{
//                             userId: req.user.User[0].id
//                         },
//                         relations:{
//                             user: true,
//                             ordId: true
//                         }
//                     })
        
//                     await newOrder?.save();

//                     res.json({
//                         Status: "Success",
//                         Status_Code: 200,
//                         Status_Message: "Order added to history!",
//                         Order_History: newOrder
//                     })
//                 }
//             } catch (error) {
//                 res.json({
//                     Status: "Failed",
//                     Status_Code: 400,
//                     Status_Message: "Order has already been placed and is currently being processed."
//                 })
//             }
//         } else{
//             res.json({
//                 Status: "Failed",
//                 Status_Code: 403,
//                 Status_Message: "Order already in history."
//             })
//         }
//     } catch (error) {
//         res.json({
//             Status: "Failed",
//             Status_Code: 500,
//             Status_Message: "Server error.",
//         })
//     }
// })


// router.get('/order/placed', authenticateToken, async (req: Request, res: Response) => {
//     try {
//         const user = await Users.find({
//             where:{
//                 id: req.user.User[0].id
//             }
//         })
//         if(user !== null){
//             const order = await Placed_Orders.find({
//                 where:{
//                     userId: req.user.User[0].id
//                 },
//                 relations:{
//                     user:true
//                 }
//             })
//             res.json({
//                 Status: "Success",
//                 Status_Code: 200,
//                 Status_Message: "Wishlist retrieved successfully!",
//                 Order: order
//             })
//         }
//         else{
//             res.status(401).json({
//                 Status: "Failed",
//                 Status_Code: 400,
//                 Status_Message: "Could not get details due to inauthorisation. Please try again.",
//             })
//         }
//     } catch (error) {
//         res.json({
//             Status: "Failed",
//             Status_Code: 500,
//             Status_Message: "Server error.",
//         })
//     }
// })


// router.delete('/order/placed', async (req: Request, res: Response) => {
//     try {
//         const user = await Users.find({
//             where:{
//                 id: req.user.User[0].id
//             }
//         })
        
//         if (user !== null){
//             try {
//                 // const delOrder = await Order_History.delete({
//                 //     userId: req.user.User[0].id
//                 // })

//                 res.json({
//                     Status: "Success",
//                     Status_Code: 200,
//                     Status_Message: "Order deleted successfully!",
//                     deletedProduct: ''
//                 })
//             } catch (error) {
//                 res.json({
//                     Status: "Failed",
//                     Status_Code: 400,
//                     Status_Message: "Order not present."
//                 })
//             }
//         }
        
//     } catch (error) {
//         res.json({
//             Status: "Failed",
//             Status_Code: 500,
//             Status_Message: "Server error.",
//         })
//     }
// })

  

// export default router;

