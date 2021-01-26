import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { CidadesService } from '../shared/servicos/cidades.service';
import { EstadosService } from '../shared/servicos/estados.service';
import { Cliente, Clientes, ClientesAPI } from './models/clientes';

const URL = 'http://localhost:3000/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(
    private http: HttpClient,
    private cidadeService: CidadesService,
    private estadoService: EstadosService
  ) {}

  retornaClientes(): Observable<Clientes> {
    return this.http.get<ClientesAPI>(URL).pipe(pluck('items'));
  }

  retornaCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${URL}/${id}`);
  }

  retornaClienteComEnderecoCompleto(id: string): Observable<Cliente> {
    return this.retornaCliente(id).pipe(
      switchMap((cliente) =>
        forkJoin({
          cliente: of(cliente),
          cidade: this.cidadeService.retornaCidade(cliente.cidade),
          estado: this.estadoService.retornaEstado(cliente.estado),
        })
      ),
      map((retornoFork) => {
        return {
          ...retornoFork.cliente,
          cidade: retornoFork.cidade.nome,
          estado: retornoFork.estado.nome,
        };
      })
    );
  }
}
