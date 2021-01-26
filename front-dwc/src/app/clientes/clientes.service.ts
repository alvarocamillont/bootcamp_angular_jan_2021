import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Cliente, Clientes, ClientesAPI } from './models/clientes';

const URL = 'http://localhost:3000/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  retornaClientes(): Observable<Clientes> {
    return this.http.get<ClientesAPI>(URL).pipe(pluck('items'));
  }

  retornaCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${URL}/${id}`);
  }
}
