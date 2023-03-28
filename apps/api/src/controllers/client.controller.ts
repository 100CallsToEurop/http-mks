import { Body, Controller, Inject, Post } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { UserInputModel, UserViewModel } from '../dtos';
import { ClientProxy } from '@nestjs/microservices';

@Controller('client')
export class ClientController {
  constructor(@Inject('CLIENT_SERVICE') private readonly client: ClientProxy) {}

  @Post()
  async createUser(@Body() createUser: UserInputModel): Promise<UserViewModel> {
    const user: UserViewModel = await firstValueFrom(
      await this.client.emit({ cmd: 'create.user' }, createUser),
    );
    return user;
  }
}
