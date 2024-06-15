import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, EventPattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
@Controller()
export class UsersMicroserviceController {
  constructor(private userService: UserService) { }
  @MessagePattern({ cmd: 'create_user' })
  createUser(@Payload() data: CreateUserDto) {
    return this.userService.createUser(data);

  }
  // @MessagePattern({ cmd: 'get_user_by_id' })
  // // getUserById(@Payload() data: { userId: number }) {
  // //   const userId = data.userId;
  // //   console.log("geting data in users.crontroller:",userId);
  // //   return this.userService.getUserById(userId);
  // // }
  // getUserById(@Payload() data: any) {
  //   const {userId} = data;
  //   console.log("geting data in users.crontroller:", userId);
  //   return this.userService.getUserById(userId);
  // }
  @MessagePattern({ cmd: 'get_user_by_id' })
  async getUserById(@Payload() data: any): Promise<User> {
    const { userId } = data;
    console.log("Received userId in UserController:", userId);
    const user = await this.userService.getUserById(userId);
    console.log("Found user in UserController:", user);
    return user;
  }
  @EventPattern('payment_created')
  paymentCreated(@Payload() data: any) {
    console.log(`payment_created:`, data);
  }
}
