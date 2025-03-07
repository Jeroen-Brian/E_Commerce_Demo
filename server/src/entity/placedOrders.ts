// import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, Timestamp, UpdateDateColumn, BaseEntity, JoinColumn } from "typeorm"
// import { Users } from "./users"
// import { Order, statusTypes } from "./order"


// @Entity()
// export class Placed_Orders extends BaseEntity{

//     @PrimaryGeneratedColumn
//     ("uuid", {
//         name: "order_history_id"
//     })
//     ordHistId: string

//     @OneToMany(() => Order, (ord) => ord.ordId)
//     ordId: Order[]

//     @Column({
//         name: 'status',
//         enum: statusTypes
//     })
//     status: string

//     @Column({
//         name: 'user_id'
//     })
//     userId: string

//     @OneToOne(() => Users, (user) => user.id)
//     @JoinColumn({ name: 'user_id'})
//     user: Users

//     @CreateDateColumn({ name: 'created_at'})
//     createdAt: Timestamp

//     @UpdateDateColumn({ name: 'updated_at'})
//     updatedAt: Timestamp

// }
