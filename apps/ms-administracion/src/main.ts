import { NestFactory } from '@nestjs/core';
import { MsAdministracionModule } from './ms-administracion.module';

async function bootstrap() {
  const app = await NestFactory.create(MsAdministracionModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
