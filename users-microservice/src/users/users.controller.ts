import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
@Controller()
export class UsersMicroserviceController {
  @MessagePattern({ cmd: 'create_user' })
  createUser(@Payload() data: CreateUserDto) {
    console.log(data);
    return data;
  }
}
