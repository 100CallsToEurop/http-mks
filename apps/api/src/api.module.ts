import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientController } from './controllers/client.controller';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 5001,
        },
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [],
})
export class ApiModule {}
