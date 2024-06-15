import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";



@Entity({ name: 'payments' })
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    userId: number;
    @Column({})
    amount: number;

    @ManyToOne(() => User, (user) => user.payments)
    user: User;

}