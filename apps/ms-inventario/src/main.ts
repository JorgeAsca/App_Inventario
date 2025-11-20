import { NestFactory } from '@nestjs/core';
import { MsInventarioModule } from './ms-inventario.module';

async function bootstrap() {
  const app = await NestFactory.create(MsInventarioModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
