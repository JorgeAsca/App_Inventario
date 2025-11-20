import { Test, TestingModule } from '@nestjs/testing';
import { MsAdministracionController } from './ms-administracion.controller';
import { MsAdministracionService } from './ms-administracion.service';

describe('MsAdministracionController', () => {
  let msAdministracionController: MsAdministracionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsAdministracionController],
      providers: [MsAdministracionService],
    }).compile();

    msAdministracionController = app.get<MsAdministracionController>(MsAdministracionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msAdministracionController.getHello()).toBe('Hello World!');
    });
  });
});
