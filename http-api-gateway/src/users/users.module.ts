import { Module } from '@nestjs/common';
import { UsersController } from './users.controllers';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
    imports: [NatsClientModule],
    controllers: [UsersController],
    providers: [],
})
export class UsersModule {}
