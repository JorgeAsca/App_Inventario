import { Module } from '@nestjs/common';
import { MsLogisticaController } from './ms-logistica.controller';
import { MsLogisticaService } from './ms-logistica.service';

@Module({
  imports: [],
  controllers: [MsLogisticaController],
  providers: [MsLogisticaService],
})
export class MsLogisticaModule {}
