import { TestBed } from '@angular/core/testing';

import { ClientesService } from './clientes.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ClientesAPI } from './models/clientes';

fdescribe('O serviço ClientesService:', () => {
  let service: ClientesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ClientesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retorna uma lista de clientes', () => {
    const resultadoApi: ClientesAPI = {
      hasNext: false,
      items: [
        {
          id: '1',
          nome: 'Alvaro',
          cidade: '001',
          estado: '002',
          endereco: 'Rua do teste',
          dataNascimento: '2020-01-01',
          sexo: 'M',
        },
      ],
    };

    const resultado = [
      {
        id: '1',
        nome: 'Alvaro',
        cidade: '001',
        estado: '002',
        endereco: 'Rua do teste',
        dataNascimento: '2020-01-01',
        sexo: 'M',
      },
    ];

    service.retornaClientes().subscribe((retorno) => {
      expect(retorno).toEqual(resultado);
    });

    const req = httpMock.expectOne((request) => request.method === 'GET');

    req.flush(resultadoApi);
  });
});
