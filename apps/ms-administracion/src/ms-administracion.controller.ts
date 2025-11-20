import { Controller, Get } from '@nestjs/common';
import { MsAdministracionService } from './ms-administracion.service';

@Controller()
export class MsAdministracionController {
  constructor(private readonly msAdministracionService: MsAdministracionService) {}

  @Get()
  getHello(): string {
    return this.msAdministracionService.getHello();
  }
}
