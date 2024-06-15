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
  @MessagePattern({ cmd: 'get_user_by_id' })
  getUserById(@Payload() data: { userId: number }) {
    const userId = data.userId;
    console.log("geting data in users.crontroller:",userId);
    return this.userService.getUserById(userId);
  }
  @EventPattern('payment_created')
  paymentCreated(@Payload() data: any) {
    console.log(`payment_created:`, data);
  }
}
