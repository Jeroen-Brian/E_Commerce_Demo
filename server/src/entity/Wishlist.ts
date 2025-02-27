import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity } from "typeorm"
import { Products } from "./Products"
import { Users } from "./Users"

@Entity()
export class Wishlist extends BaseEntity{

    @PrimaryGeneratedColumn()
    wishId: UUID

    @OneToMany(() => Products, (prod) => prod.prodId)
    prodId: Products[]

    @OneToOne(() => Users, (user) => user.id)
    userId: Users

    @CreateDateColumn()
    createdAt: Timestamp

    @UpdateDateColumn()
    updatedAt: Timestamp

}
