import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity } from "typeorm"
import { Users } from "./Users"
import { Placed_Orders, statusTypes } from "./Placed_Orders"


@Entity()
export class Order_History extends BaseEntity{

    @PrimaryGeneratedColumn()
    ordHistId: UUID

    @OneToMany(() => Placed_Orders, (ord) => ord.ordId)
    ordId: Placed_Orders[]

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
