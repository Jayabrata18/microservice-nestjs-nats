import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/payments.dto";



@Controller('payments')
export class PaymentsMicroserviceController {
    @EventPattern('create_payment')
    createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
        console.log(createPaymentDto);
        return createPaymentDto;
    }

}