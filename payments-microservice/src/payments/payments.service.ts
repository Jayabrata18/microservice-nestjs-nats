import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "./entities/payment.entity";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dto/payments.dto";


@Injectable()
export class PaymentsService {
    constructor(@InjectRepository(Payment) private paymentRepository: Repository<Payment>) { }
    createPayment(createPaymentDto: CreatePaymentDto) {
        const payment = this.paymentRepository.create(createPaymentDto);
        return this.paymentRepository.save(payment);
    }
}