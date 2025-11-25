import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(
    private readonly apiGatewayService: ApiGatewayService,
    @Inject('ADMIN_SERVICE') private readonly adminClient: ClientProxy,
  ) {}

  // Crear Empresa
  @Post('empresas')
  crearEmpresa(@Body() data: any) {
    return this.adminClient.send('createEmpresa', data);
  }

  // Crear Rol
  @Post('roles')
  crearRol(@Body() data: any) {
    return this.adminClient.send('createRole', data);
  }

  // Crear Usuario
  @Post('usuarios')
  crearUsuario(@Body() data: any) {
    return this.adminClient.send('createUsuario', data);
  }

  // Listar para verificar
  @Get('usuarios')
  listarUsuarios() {
    return this.adminClient.send('findAllUsuario', {});
  }
}