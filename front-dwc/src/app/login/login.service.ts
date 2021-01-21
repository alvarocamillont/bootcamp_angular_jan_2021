import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(poLogin: PoPageLogin): Observable<any> {
    const { login, password } = poLogin;
    return this.http.post<any>(`http://localhost:3000/auth/login`, {
      username: login,
      password,
    });
  }
}
