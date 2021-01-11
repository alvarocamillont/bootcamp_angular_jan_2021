import { Test, TestingModule } from '@nestjs/testing';
import { CidadesController } from './cidades.controller';

describe('CidadesController', () => {
  let controller: CidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CidadesController],
    }).compile();

    controller = module.get<CidadesController>(CidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
