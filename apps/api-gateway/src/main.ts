import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import {Logger} from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(ApiGatewayModule);
  // await app.listen(process.env.port ?? 3000);

  app.setGlobalPrefix('api');

  await app.listen(3000);
  Logger.log(`Gateway escuchando en http://localhost:3000`);
}
bootstrap();
