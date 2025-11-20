import { Module } from '@nestjs/common';
import { MsTercerosController } from './ms-terceros.controller';
import { MsTercerosService } from './ms-terceros.service';

@Module({
  imports: [],
  controllers: [MsTercerosController],
  providers: [MsTercerosService],
})
export class MsTercerosModule {}
