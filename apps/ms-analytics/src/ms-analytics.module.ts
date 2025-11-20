import { Module } from '@nestjs/common';
import { MsAnalyticsController } from './ms-analytics.controller';
import { MsAnalyticsService } from './ms-analytics.service';

@Module({
  imports: [],
  controllers: [MsAnalyticsController],
  providers: [MsAnalyticsService],
})
export class MsAnalyticsModule {}
