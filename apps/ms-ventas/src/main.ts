import { NestFactory } from '@nestjs/core';
import { MsVentasModule } from './ms-ventas.module';

async function bootstrap() {
  const app = await NestFactory.create(MsVentasModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
