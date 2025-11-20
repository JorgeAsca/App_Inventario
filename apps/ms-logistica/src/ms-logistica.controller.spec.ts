import { Test, TestingModule } from '@nestjs/testing';
import { MsLogisticaController } from './ms-logistica.controller';
import { MsLogisticaService } from './ms-logistica.service';

describe('MsLogisticaController', () => {
  let msLogisticaController: MsLogisticaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsLogisticaController],
      providers: [MsLogisticaService],
    }).compile();

    msLogisticaController = app.get<MsLogisticaController>(MsLogisticaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msLogisticaController.getHello()).toBe('Hello World!');
    });
  });
});
