import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity } from "typeorm"
import { Product_Types } from "./Product_Types"


@Entity()
export class Products extends BaseEntity{

    @PrimaryGeneratedColumn()
    prodId: UUID

    @Column({
        unique: true
    })
    prodName: string

    @Column({
        type: "numeric"
    })
    cost: number

    @Column({
        length: 110
    })
    description: string

    @ManyToOne(() => Product_Types, (prod_types) => prod_types.prodTypeId)
    prodTypeId: Product_Types

    @CreateDateColumn()
    createdAt: Timestamp

    @UpdateDateColumn()
    updatedAt: Timestamp

}
