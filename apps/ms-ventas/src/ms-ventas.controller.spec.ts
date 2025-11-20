import { Test, TestingModule } from '@nestjs/testing';
import { MsVentasController } from './ms-ventas.controller';
import { MsVentasService } from './ms-ventas.service';

describe('MsVentasController', () => {
  let msVentasController: MsVentasController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsVentasController],
      providers: [MsVentasService],
    }).compile();

    msVentasController = app.get<MsVentasController>(MsVentasController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msVentasController.getHello()).toBe('Hello World!');
    });
  });
});
