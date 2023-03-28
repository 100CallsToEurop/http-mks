import { CreateUser } from '@app/contracts/lib/client.create.user';
import { Controller} from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern(CreateUser.command)
  async createUser(message: CreateUser.Request): Promise<CreateUser.Response> {
    return message;
  }
}
