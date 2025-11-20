import { Test, TestingModule } from '@nestjs/testing';
import { MsInventarioController } from './ms-inventario.controller';
import { MsInventarioService } from './ms-inventario.service';

describe('MsInventarioController', () => {
  let msInventarioController: MsInventarioController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsInventarioController],
      providers: [MsInventarioService],
    }).compile();

    msInventarioController = app.get<MsInventarioController>(MsInventarioController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msInventarioController.getHello()).toBe('Hello World!');
    });
  });
});
