import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity, JoinColumn, Generated } from "typeorm"
import { Product_Types } from "./productTypes"
import { Wishlist } from "./wishlist"
import { User_Cart } from "./userCart"


@Entity()
export class Products extends BaseEntity{

    @PrimaryGeneratedColumn
    ("uuid", {
        name: 'product_id'
    })
    id: string

    @Column({
        name: 'product_name',
        unique: true
    })
    prodName: string

    @Column({
        name: 'cost',
        type: "numeric"
    })
    cost: number

    @Column({
        name: 'description',
        length: 110
    })
    description: string

    @Column({
        name: 'product_type'
    })
    prodType: string

    @ManyToOne(() => Product_Types, (prod_types) => prod_types.products, {cascade:true})
    @JoinColumn({ name: 'product_type'})
    productType: Product_Types

    @ManyToOne(() => Wishlist, (wishlist) => wishlist.prodId)
    @JoinColumn({ name: 'prod_wishlist_id'})
    wishlist: Wishlist

    @ManyToOne(() => User_Cart, (cart) => cart.products)
    @JoinColumn({ name: 'prod_cart_id'})
    cart: User_Cart

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Timestamp

}
