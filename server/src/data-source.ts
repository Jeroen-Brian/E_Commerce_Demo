import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/users"
import { Product_Types } from "./entity/productTypes"
import { Products } from "./entity/products"
import { Wishlist } from "./entity/wishlist"
import { User_Cart } from "./entity/userCart"
import { Addresses } from "./entity/addresses"
import { Roles } from "./entity/roles"
import { Order } from "./entity/order"
// import { Placed_Orders } from "./entity/placedOrders"

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Jerrycherry@10115",
    database: "e_commerce",
    logging: true,
    synchronize: true,
    entities: [Users, Roles, Product_Types, Products, Wishlist, User_Cart, Addresses, Order /*,Placed_Orders*/],
    migrations: ["./src/migration/*.ts"],
    subscribers: [],
})
