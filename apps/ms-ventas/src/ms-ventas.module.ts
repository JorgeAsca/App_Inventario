import { Module } from '@nestjs/common';
import { MsVentasController } from './ms-ventas.controller';
import { MsVentasService } from './ms-ventas.service';

@Module({
  imports: [],
  controllers: [MsVentasController],
  providers: [MsVentasService],
})
export class MsVentasModule {}
