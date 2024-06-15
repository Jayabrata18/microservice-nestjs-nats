import { Module } from '@nestjs/common';
import { PaymentsMicroserviceModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payments/entities/payment.entity';
import { User } from './payments/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    entities: [Payment, User],
    database: 'postgres',
    synchronize: true,
    username: 'postgres',
    password: 'postgres',
  }), PaymentsMicroserviceModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
