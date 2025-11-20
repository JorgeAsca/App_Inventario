import { Module } from '@nestjs/common';
import { MsAdministracionController } from './ms-administracion.controller';
import { MsAdministracionService } from './ms-administracion.service';

@Module({
  imports: [],
  controllers: [MsAdministracionController],
  providers: [MsAdministracionService],
})
export class MsAdministracionModule {}
