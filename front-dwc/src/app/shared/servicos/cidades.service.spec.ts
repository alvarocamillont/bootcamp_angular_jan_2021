import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CidadesService } from './cidades.service';

describe('CidadesService', () => {
  let service: CidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
