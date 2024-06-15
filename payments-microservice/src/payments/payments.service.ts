import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "./entities/payment.entity";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dto/payments.dto";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { User } from "./entities/user.entity";


@Injectable()
export class PaymentsService {
    constructor(@InjectRepository(Payment) private paymentRepository: Repository<Payment>,
        @Inject('NATS_SERVICE') private natsClient: ClientProxy,
    ) { }
    async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
        const user = await lastValueFrom<User>(this.natsClient.send({ cmd: 'get_user_by_id' }, {
            userId

        }));
        console.log("payment_service:", user);
        const payment = this.paymentRepository.create(createPaymentDto);
        console.log("p_s:", payment);
        return this.paymentRepository.save(payment);
    }
}