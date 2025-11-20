import { Controller, Get } from '@nestjs/common';
import { MsLogisticaService } from './ms-logistica.service';

@Controller()
export class MsLogisticaController {
  constructor(private readonly msLogisticaService: MsLogisticaService) {}

  @Get()
  getHello(): string {
    return this.msLogisticaService.getHello();
  }
}
