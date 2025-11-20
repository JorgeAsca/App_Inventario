import { Controller, Get } from '@nestjs/common';
import { MsTercerosService } from './ms-terceros.service';

@Controller()
export class MsTercerosController {
  constructor(private readonly msTercerosService: MsTercerosService) {}

  @Get()
  getHello(): string {
    return this.msTercerosService.getHello();
  }
}
