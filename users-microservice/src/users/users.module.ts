import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Payment } from './entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Payment])],
  controllers: [UsersMicroserviceController],
  providers: [UserService],
})
export class UsersModule { }
