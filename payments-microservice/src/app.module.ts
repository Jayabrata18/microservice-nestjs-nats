import { Module } from '@nestjs/common';
import { PaymentsMicroserviceModule } from './payments/payments.module';

@Module({
  imports: [PaymentsMicroserviceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
