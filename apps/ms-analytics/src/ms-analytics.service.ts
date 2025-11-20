import { Injectable } from '@nestjs/common';

@Injectable()
export class MsAnalyticsService {
  getHello(): string {
    return 'Hello World!';
  }
}
