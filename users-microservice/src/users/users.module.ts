import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';

@Module({
  controllers: [UsersMicroserviceController]
})
export class UsersModule {}
