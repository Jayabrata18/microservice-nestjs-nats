import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/payments.dto";



@Controller('payments')
export class PaymentsMicroserviceController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {
    }
    @EventPattern('create_payment')
    createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
        console.log(createPaymentDto);
        this.natsClient.emit('payment_created', createPaymentDto);
        return createPaymentDto;
    }

}