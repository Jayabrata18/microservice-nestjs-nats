import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, EventPattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller()
export class UsersMicroserviceController {
  constructor(private userService: UserService) { }
  @MessagePattern({ cmd: 'create_user' })
  createUser(@Payload() data: CreateUserDto) {
    return this.userService.createUser(data);
    
  }
  @EventPattern('payment_created')
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
}
