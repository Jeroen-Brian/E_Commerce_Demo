import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity, JoinColumn } from "typeorm"
import { Products } from "./products"
import { Users } from "./users"

@Entity()
export class Wishlist extends BaseEntity{

    @PrimaryGeneratedColumn
    ("uuid", {
        name: "wishlist_id"
    })
    id: string

    @Column({
        name: 'user_id'
    })
    userId: string

    @OneToMany(() => Products, (prod) => prod.wishlist)
    prodId: Products[]

    @OneToOne(() => Users, (user) => user.id)
    @JoinColumn({name: 'user_ref_id'})
    user: Users

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Timestamp

}
