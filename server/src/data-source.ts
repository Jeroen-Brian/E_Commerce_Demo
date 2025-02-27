import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Product_Types } from "./entity/Product_Types"
import { Products } from "./entity/Products"
import { Wishlist } from "./entity/Wishlist"
import { User_Cart } from "./entity/User_Cart"
import { Addresses } from "./entity/Addresses"
import { Roles } from "./entity/Roles"
import { Placed_Orders } from "./entity/Placed_Orders"
import { Order_History } from "./entity/Order_History"

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Jerrycherry@10115",
    database: "e_commerce",
    logging: true,
    synchronize: true,
    entities: [Users, Roles, Product_Types, Products, Wishlist, User_Cart, Addresses, Placed_Orders, Order_History],
    migrations: ["./src/migration/*.ts"],
    subscribers: [],
})
