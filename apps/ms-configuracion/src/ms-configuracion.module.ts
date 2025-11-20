import { Module } from '@nestjs/common';
import { MsConfiguracionController } from './ms-configuracion.controller';
import { MsConfiguracionService } from './ms-configuracion.service';

@Module({
  imports: [],
  controllers: [MsConfiguracionController],
  providers: [MsConfiguracionService],
})
export class MsConfiguracionModule {}
