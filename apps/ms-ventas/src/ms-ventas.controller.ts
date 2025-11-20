import { Controller, Get } from '@nestjs/common';
import { MsVentasService } from './ms-ventas.service';

@Controller()
export class MsVentasController {
  constructor(private readonly msVentasService: MsVentasService) {}

  @Get()
  getHello(): string {
    return this.msVentasService.getHello();
  }
}
