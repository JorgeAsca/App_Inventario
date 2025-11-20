import { Module } from '@nestjs/common';
import { MsInventarioController } from './ms-inventario.controller';
import { MsInventarioService } from './ms-inventario.service';

@Module({
  imports: [],
  controllers: [MsInventarioController],
  providers: [MsInventarioService],
})
export class MsInventarioModule {}
