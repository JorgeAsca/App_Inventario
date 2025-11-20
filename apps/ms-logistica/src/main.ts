import { NestFactory } from '@nestjs/core';
import { MsLogisticaModule } from './ms-logistica.module';

async function bootstrap() {
  const app = await NestFactory.create(MsLogisticaModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
