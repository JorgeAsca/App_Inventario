import { Controller, Get } from '@nestjs/common';
import { MsAnalyticsService } from './ms-analytics.service';

@Controller()
export class MsAnalyticsController {
  constructor(private readonly msAnalyticsService: MsAnalyticsService) {}

  @Get()
  getHello(): string {
    return this.msAnalyticsService.getHello();
  }
}
