import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createUser(@Body() createusrDto: CreateUserDto) {
    console.log(createusrDto);
    return this.natsClient
      .send({ cmd: 'create_user' }, createusrDto)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
