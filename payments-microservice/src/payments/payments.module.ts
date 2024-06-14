import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';

@Module({
    imports: [],
    controllers: [PaymentsMicroserviceController],
    providers: [],

})
export class PaymentsMicroserviceModule { }