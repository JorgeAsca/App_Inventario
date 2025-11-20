import { NestFactory } from '@nestjs/core';
import { MsTercerosModule } from './ms-terceros.module';

async function bootstrap() {
  const app = await NestFactory.create(MsTercerosModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
