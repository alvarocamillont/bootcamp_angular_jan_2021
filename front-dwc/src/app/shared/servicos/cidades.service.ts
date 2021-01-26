import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from './interfaces/cidades';

const URL = 'http://localhost:3000/cidades';

@Injectable({
  providedIn: 'root',
})
export class CidadesService {
  constructor(private http: HttpClient) {}

  retornaCidade(id: string): Observable<Cidade> {
    return this.http.get<Cidade>(`${URL}/${id}`);
  }
}
