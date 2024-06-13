import { Test, TestingModule } from '@nestjs/testing';
import { UsersMicroserviceController } from './users.controller';

describe('UsersMicroserviceController', () => {
  let controller: UsersMicroserviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersMicroserviceController],
    }).compile();

    controller = module.get<UsersMicroserviceController>(UsersMicroserviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
