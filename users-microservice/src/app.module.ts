import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Payment } from './users/entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    entities: [User, Payment],
    database: 'postgres',
    synchronize: true,
    username: 'postgres',
    password: 'postgres',
  }), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
