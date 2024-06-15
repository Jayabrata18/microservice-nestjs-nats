import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./payment.entity";


@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'varchar', length: 255})
    email: string;
    @Column({type: 'varchar', length: 255})
    password: string;

    @OneToMany(() => Payment, (payment) => payment.user)
    @JoinColumn()
    payments: Payment[];
} 
