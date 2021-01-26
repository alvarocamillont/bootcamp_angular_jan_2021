import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Clientes, ClientesAPI } from './models/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  retornaClientes(): Observable<Clientes> {
    return this.http
      .get<ClientesAPI>('http://localhost:3000/clientes')
      .pipe(pluck('items'));
  }
}
