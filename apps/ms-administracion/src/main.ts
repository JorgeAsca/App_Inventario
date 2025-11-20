import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { MsAdministracionModule } from './ms-administracion.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsAdministracionModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001,
      },
    },
  );
  await app.listen();
  logger.log('Microservicio de Administracion escuchando en el puerto 3001');
}
bootstrap();
