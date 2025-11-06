import { catchError, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from '../../../core/http/apiEndpoint';
import { LoginDto } from '../../../shared/dtos/login.dto';
import { RegisterDto } from '../../../shared/dtos/registerDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    login(login: LoginDto): Observable<string> {
      return this.http.post(`${apiEndpoint.auth.login}`, login, {responseType: 'text'});
  }

    register(register: RegisterDto) {
      return this.http.post(`${apiEndpoint.auth.register}`, register);
    }

    getAuthToken() {
      return localStorage.getItem('userToken');
    }

    isAuth(token: string): Observable<boolean> {
      return this.http.get(apiEndpoint.auth.tokenValid).pipe(
        map(() => true),
        catchError(async (err) => false)
      )
    }
}
