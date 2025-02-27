import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, Double, OneToMany, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity } from "typeorm"
import { Products } from "./Products"

export enum productTypes {
    CLOTHING = 'clothing',
    UTENSILS = 'utensils',
    APPLIANCES = 'appliances',
    SPORTS_GOODS = 'sports_goods',
    TOYS = 'toys'
}

@Entity()
export class Product_Types extends BaseEntity{

    @PrimaryGeneratedColumn()
    prodTypeId: UUID

    @Column({
        unique: true,
        enum: productTypes
    })
    name: string

    @Column({
        length: 110
    })
    description: string

    @OneToMany(() => Products, (prod) => prod.prodTypeId)
    products: Products[]

    @CreateDateColumn()
    createdAt: Timestamp

    @UpdateDateColumn()
    updatedAt: Timestamp

}
