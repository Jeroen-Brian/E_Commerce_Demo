import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity, JoinColumn } from "typeorm"
import { Products } from "./products"
import { Users } from "./users"

@Entity()
export class User_Cart extends BaseEntity{

    @PrimaryGeneratedColumn
    ("uuid", {
        name: "cart_id"
    })
    id: string

    @Column({
        name: 'user_id'
    })
    userId: string

    @OneToMany(() => Products, (prod) => prod.cart)
    products: Products[]

    @OneToOne(() => Users, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user: Users

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Timestamp

}
