import { UUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity } from "typeorm"

export enum roleTypes {
    SUPERADMIN = 'superAdmin',
    ADMIN = 'admin',
    USER = 'user'
}

@Entity()
export class Roles extends BaseEntity{

    @PrimaryGeneratedColumn()
    roleId: UUID

    @Column({
        unique: true,
        enum: roleTypes
    })
    roleName: string

    @CreateDateColumn()
    createdAt: Timestamp

    @UpdateDateColumn()
    updatedAt: Timestamp

}
