import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { MsAdministracionModule } from './ms-administracion.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Bootstrap-Admin');

  // Esto es un truco avanzado para usar variables de entorno en el main.ts
  const appContext = await NestFactory.createApplicationContext(MsAdministracionModule);
  const configService = appContext.get(ConfigService);
  const port = configService.get<number>('PORT') || 3001;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsAdministracionModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0', 
        port: port,
      },
    },
  );
  
  await app.listen();
  logger.log(`Microservicio de Administración corriendo en TCP 0.0.0.0:${port}`);
  
  // Cerramos el contexto temporal
  await appContext.close();
}
bootstrap();