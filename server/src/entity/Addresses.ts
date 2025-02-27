import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity } from "typeorm"
import { Users } from "./Users"

export enum adressTypes {
    HOME = 'home',
    WORK = 'work',
    BUSINESS = 'business',
    OTHER = 'other'
}

@Entity()
export class Addresses extends BaseEntity{

    @PrimaryGeneratedColumn()
    adrId: UUID

    @Column({
        unique: true
    })
    address: string

    @Column({
        unique: true,
        enum: adressTypes
    })
    addressType: string

    @ManyToOne(() => Users, (user) => user.id)
    userId: Users
    
    @CreateDateColumn()
    createdAt: Timestamp

    @UpdateDateColumn()
    updatedAt: Timestamp
}
