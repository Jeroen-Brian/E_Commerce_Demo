import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity, JoinColumn } from "typeorm"
import { Users } from "./users"

export enum addressTypes {
    HOME = 'home',
    WORK = 'work',
    BUSINESS = 'business',
    OTHER = 'other'
}

@Entity()
export class Addresses extends BaseEntity{

    @PrimaryGeneratedColumn
    ("uuid", {
        name: 'address_id'
    })
    id: string

    @Column({
        name: 'address',
        unique: true
    })
    address: string

    @Column({
        name: 'type',
        unique: true,
        enum: addressTypes
    })
    addressType: string

    @Column({
        name: 'user_id'
    })
    userId: string

    @ManyToOne(() => Users, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user: Users
    
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Timestamp
}
