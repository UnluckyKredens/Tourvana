import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from '../../../core/http/apiEndpoint';
import { LoginDto } from '../../../shared/dtos/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    login(login: LoginDto): Observable<string> {
      return this.http.post(`${apiEndpoint.auth.login}`, login, {responseType: 'text'}).pipe(tap(t => {
        localStorage.setItem('userToken', t);
      }));
  }

    register() {

    }

    getAuthToken() {
      return localStorage.getItem('userToken');
    }
}
