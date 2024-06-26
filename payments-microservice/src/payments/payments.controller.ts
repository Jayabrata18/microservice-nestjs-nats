import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/payments.dto";
import { Payment } from "./entities/payment.entity";
import { PaymentsService } from "./payments.service";



@Controller('payments')
export class PaymentsMicroserviceController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy, private paymentsService: PaymentsService) {
    }
    @EventPattern('create_payment')
    async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
        console.log("payment controller:",createPaymentDto);
        const payment = await this.paymentsService.createPayment(createPaymentDto);
        console.log("payment controller:",payment);
        this.natsClient.emit('payment_created', payment);
        return payment;
    }

}