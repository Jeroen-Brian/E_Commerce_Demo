import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity } from "typeorm"

export enum roleTypes {
    SUPERADMIN = 'superAdmin',
    ADMIN = 'admin',
    USER = 'user'
}

@Entity()
export class Roles extends BaseEntity{

    @PrimaryGeneratedColumn
    ("uuid", {
        name: "role_id"
    })
    id: string

    @Column({
        name: 'role_name',
        unique: true,
        enum: roleTypes
    })
    roleName: string

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Timestamp

}
