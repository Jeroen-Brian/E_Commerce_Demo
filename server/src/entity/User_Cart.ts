import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity } from "typeorm"
import { Products } from "./Products"
import { Users } from "./Users"

@Entity()
export class User_Cart extends BaseEntity{

    @PrimaryGeneratedColumn()
    cartId: UUID

    @OneToMany(() => Products, (prod) => prod.prodId)
    prodId: Products[]

    @OneToOne(() => Users, (user) => user.id)
    userId: Users

    @CreateDateColumn()
    createdAt: Timestamp

    @UpdateDateColumn()
    updatedAt: Timestamp

}
