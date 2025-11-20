import { NestFactory } from '@nestjs/core';
import { MsConfiguracionModule } from './ms-configuracion.module';

async function bootstrap() {
  const app = await NestFactory.create(MsConfiguracionModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
