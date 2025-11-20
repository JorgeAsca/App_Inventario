import { Controller, Get } from '@nestjs/common';
import { MsConfiguracionService } from './ms-configuracion.service';

@Controller()
export class MsConfiguracionController {
  constructor(private readonly msConfiguracionService: MsConfiguracionService) {}

  @Get()
  getHello(): string {
    return this.msConfiguracionService.getHello();
  }
}
