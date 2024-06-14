import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
    imports: [NatsClientModule],
    controllers: [PaymentsMicroserviceController],
    providers: [],

})
export class PaymentsMicroserviceModule { }