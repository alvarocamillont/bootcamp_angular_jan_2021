import { Test, TestingModule } from '@nestjs/testing';
import { EstadosController } from './estados.controller';

describe('EstadosController', () => {
  let controller: EstadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadosController],
    }).compile();

    controller = module.get<EstadosController>(EstadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
