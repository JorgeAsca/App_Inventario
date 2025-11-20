import { NestFactory } from '@nestjs/core';
import { MsAnalyticsModule } from './ms-analytics.module';

async function bootstrap() {
  const app = await NestFactory.create(MsAnalyticsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
