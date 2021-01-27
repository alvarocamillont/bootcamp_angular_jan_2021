import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Cidades, CidadesAPI } from './interfaces/cidades';
import { Estado, EstadoAPI, Estados } from './interfaces/estados';

const URL = 'http://localhost:3000/estados';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  constructor(private http: HttpClient) {}

  retornaEstado(id: string): Observable<Estado> {
    return this.http.get<Estado>(`${URL}/${id}`);
  }

  retornaEstados(): Observable<Estados> {
    return this.http.get<EstadoAPI>(`${URL}`).pipe(pluck('items'));
  }

  retornaCidade(idEstado: string): Observable<Cidades> {
    return this.http
      .get<CidadesAPI>(`${URL}/${idEstado}/cidades`)
      .pipe(pluck('items'));
  }
}
