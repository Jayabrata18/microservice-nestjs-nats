import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentsService } from './payments.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Payment]),
        NatsClientModule],
    controllers: [PaymentsMicroserviceController],
    providers: [PaymentsService],

})
export class PaymentsMicroserviceModule { }