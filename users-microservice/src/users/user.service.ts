import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }
    createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }
    // getUserById(id: number): Promise<User> {
    //     console.log("geting data in users.service:", id);
    //     return this.userRepository.findOneBy({ id });
    // }
    async getUserById(id: number): Promise<User> {
        console.log("Fetching user by ID in UserService:", id);
        const user = await this.userRepository.findOneBy({ id });
        console.log("Fetched user in UserService:", user);
        return user;
    }

}