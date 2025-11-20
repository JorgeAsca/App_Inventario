import { Test, TestingModule } from '@nestjs/testing';
import { MsConfiguracionController } from './ms-configuracion.controller';
import { MsConfiguracionService } from './ms-configuracion.service';

describe('MsConfiguracionController', () => {
  let msConfiguracionController: MsConfiguracionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsConfiguracionController],
      providers: [MsConfiguracionService],
    }).compile();

    msConfiguracionController = app.get<MsConfiguracionController>(MsConfiguracionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msConfiguracionController.getHello()).toBe('Hello World!');
    });
  });
});
