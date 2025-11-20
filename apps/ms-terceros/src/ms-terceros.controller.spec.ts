import { Test, TestingModule } from '@nestjs/testing';
import { MsTercerosController } from './ms-terceros.controller';
import { MsTercerosService } from './ms-terceros.service';

describe('MsTercerosController', () => {
  let msTercerosController: MsTercerosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsTercerosController],
      providers: [MsTercerosService],
    }).compile();

    msTercerosController = app.get<MsTercerosController>(MsTercerosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msTercerosController.getHello()).toBe('Hello World!');
    });
  });
});
