import { Test, TestingModule } from '@nestjs/testing';
import { CidadesService } from './cidades.service';

describe('CidadesService', () => {
  let service: CidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CidadesService],
    }).compile();

    service = module.get<CidadesService>(CidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
