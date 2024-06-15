import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersMicroserviceController],
  providers: [UserService],
})
export class UsersModule { }
