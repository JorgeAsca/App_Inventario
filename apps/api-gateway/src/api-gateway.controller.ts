import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(
    private readonly apiGatewayService: ApiGatewayService,

    // Inyectamos el cliente 
    @Inject('INVENTORY_SERVICE') private readonly adminClient: ClientProxy,
  ) {}

  @Get('ping-admin')
  pingAdmin(){
    // Aca se envia el mensaje al microservicio de administracion
    return this.adminClient.send({ cmd: 'ping' }, {});
  }
}
