import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity } from "typeorm"
import { User_Cart } from "./User_Cart"
import { Users } from "./Users"
import { Addresses } from "./Addresses"

export enum statusTypes {
    ORDER_PLACED = 'order-placed',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    IN_TRANSIT = 'in-transit',
    OUT_FOR_DELIVERY = 'out-for-delivery',
    DELIVERED = 'delivered' 
}

@Entity()
export class Placed_Orders extends BaseEntity{

    @PrimaryGeneratedColumn()
    ordId: UUID

    @OneToOne(() => User_Cart, (cart) => cart.cartId)
    cartId: User_Cart

    @OneToOne(() => Addresses, (adr) => adr.adrId)
    adrId: Addresses
    
    @Column({
        enum: statusTypes
    })
    status: string

    @OneToOne(() => Users, (user) => user.id)
    userId: Users

    @CreateDateColumn()
    createdAt: Timestamp

    @UpdateDateColumn()
    updatedAt: Timestamp

}
