import { Entity, PrimaryGeneratedColumn, Column, Double, OneToMany, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity, JoinColumn } from "typeorm"
import { Products } from "./products"


@Entity()
export class Product_Types extends BaseEntity{

    @PrimaryGeneratedColumn
    ("uuid", {
        name: "product_type_id"
    })
    id: string

    @Column({
        name: 'type_name',
        unique: true,
    })
    name: string

    @Column({
        name: 'description',
        length: 110
    })
    description: string

    @OneToMany(() => Products, (prod) => prod.productType)
    products: Products[]

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Timestamp

}
