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
    async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto): Promise<Payment> {
        const user = await lastValueFrom<User>(this.natsClient.send({ cmd: 'get_user_by_id' }, {
            userId

        }));
        console.log("payment_service:", userId, user);
        const payment = this.paymentRepository.create({...createPaymentDto, user});
        console.log("p_s:", payment);
        return this.paymentRepository.save(payment);
    }
    // async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
    //     try {
    //         const user = await lastValueFrom(
    //             this.natsClient.send({ cmd: 'get_user_by_id' }, { userId })
    //         );

    //         // if (!user) {
    //         //     throw new Error(`User with ID ${userId} not found`);
    //         // }

    //         console.log('payment_service:', user, userId);

    //         const payment = this.paymentRepository.create({
    //             ...createPaymentDto,
    //             userId: userId, // Include the userId in the payment entity
    //         });

    //         console.log('p_s:', payment);

    //         return this.paymentRepository.save(payment);
    //     } catch (error) {
    //         console.error('Error in createPayment:', error);
    //         throw error;
    //     }
    // }
}