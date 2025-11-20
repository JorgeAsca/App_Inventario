import { Controller, Get } from '@nestjs/common';
import { MsInventarioService } from './ms-inventario.service';

@Controller()
export class MsInventarioController {
  constructor(private readonly msInventarioService: MsInventarioService) {}

  @Get()
  getHello(): string {
    return this.msInventarioService.getHello();
  }
}
