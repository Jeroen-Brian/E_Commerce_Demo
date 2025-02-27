import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, Timestamp, UpdateDateColumn, CreateDateColumn, BaseEntity } from "typeorm"
// import { IsEmail } from "class-validator"
import { Roles } from "./Roles"
import { User_Cart } from "./User_Cart"
import { Addresses } from "./Addresses"
import { Order_History } from "./Order_History"

@Entity()
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    userName: string

    @Column({
        unique:true
    })
    email: string

    @Column({
        length: 15
    })
    password: string

    @OneToOne(() => Roles, (role) => role.roleId)
    roleId: Roles

    @CreateDateColumn()
    createdAt: Timestamp
    
    @UpdateDateColumn()
    updatedAt: Timestamp

}
