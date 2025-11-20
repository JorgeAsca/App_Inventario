import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(
    private readonly apiGatewayService: ApiGatewayService,

    @Inject('ADMIN_SERVICE') private readonly adminClient: ClientProxy,
  ) {}

  @Get('ping-admin')
  pingAdmin(){
    return this.adminClient.send({ cmd: 'ping' }, {});
  }
}