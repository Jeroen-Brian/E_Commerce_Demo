import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, Timestamp, UpdateDateColumn, CreateDateColumn, BaseEntity, JoinColumn } from "typeorm"
// import { IsEmail } from "class-validator"
import { Roles } from "./roles"

@Entity()
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn
    ("uuid", {
        name: "user_id"
    })
    id: string

    @Column({ name: 'role_id'})
    roleId: string

    @Column({ name: 'user_name'})
    userName: string

    @Column({
        name: 'email',
        unique:true
    })
    email: string

    @Column({
        name: 'password',
        length: 15
    })
    password: string

    @OneToOne(() => Roles, (role) => role.id)
    @JoinColumn({ name: 'role_id'})
    role: Roles

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Timestamp
    
    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Timestamp

}
