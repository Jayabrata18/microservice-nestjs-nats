import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: 'payments' })
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({})
    amount: number;

}