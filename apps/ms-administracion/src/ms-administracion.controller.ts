import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MsAdministracionService } from './ms-administracion.service';


@Controller()
export class MsAdministracionController {
  constructor(private readonly msAdministracionService: MsAdministracionService) {}

  @MessagePattern({ cmd: 'ping' })
  ping() {
    return { mensaje: '¡Pong desde MS-Administracion! (Conectado correctamente)' };
  }
}
