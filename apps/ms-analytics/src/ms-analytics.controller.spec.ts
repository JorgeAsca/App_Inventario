import { Test, TestingModule } from '@nestjs/testing';
import { MsAnalyticsController } from './ms-analytics.controller';
import { MsAnalyticsService } from './ms-analytics.service';

describe('MsAnalyticsController', () => {
  let msAnalyticsController: MsAnalyticsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsAnalyticsController],
      providers: [MsAnalyticsService],
    }).compile();

    msAnalyticsController = app.get<MsAnalyticsController>(MsAnalyticsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msAnalyticsController.getHello()).toBe('Hello World!');
    });
  });
});
