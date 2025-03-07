import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity, JoinColumn } from "typeorm"
import { User_Cart } from "./userCart"
import { Users } from "./users"
import { Addresses } from "./addresses"
// import { Order_History } from "./orderHistory"

export enum statusTypes {
    ORDER_PLACED = 'order-placed',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    IN_TRANSIT = 'in-transit',
    OUT_FOR_DELIVERY = 'out-for-delivery',
    DELIVERED = 'delivered' 
}

@Entity()
export class Order extends BaseEntity{

    @PrimaryGeneratedColumn
    ("uuid", {
        name: "order_id"
    })
    ordId: string
    
    @Column({
        enum: statusTypes,
        default: 'processing'
    })
    status: string

    @Column({
        name: 'cart_id'
    })
    cartId: string

    @Column({
        name: 'address_id'
    })
    adrId: string

    @Column({
        name: 'user_id'
    })
    userId: string

    @OneToOne(() => User_Cart, (cart) => cart.id)
    @JoinColumn({ name: 'cart_id'})
    cart: User_Cart

    @OneToOne(() => Addresses, (adr) => adr.id)
    @JoinColumn({ name: 'address_id'})
    address: Addresses

    @OneToOne(() => Users, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user: Users

    // @ManyToOne(() => Placed_Orders, (order) => order.ordId)
    // @JoinColumn({ name: 'order_id'})
    // order: Placed_Orders

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Timestamp

}
