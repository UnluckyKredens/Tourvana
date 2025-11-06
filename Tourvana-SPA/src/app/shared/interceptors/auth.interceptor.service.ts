import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { AuthService } from "../../modules/auth/services/auth.service";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private snackbar: MatSnackBar, private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.authService.getAuthToken()

      if(token) {
        req = req.clone({
          setHeaders: {Authorization: `Bearer ${token}`}
        })
      }
      return next.handle(req).pipe(
    tap((evt: HttpEvent<any>) => {
      if(evt.type === HttpEventType.Response) {
        const res = evt as HttpResponse<any>;
        const body = res.body;

        if(body?.status == 401) {
          this.router.navigate(['']);
          this.snackbar.open("Nie masz dostępu", "Ok");
        }
      }


      }),
        catchError((err) => {
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              localStorage.clear()
              this.snackbar.open("Nie zalogowano", "Ok")
            }
          }
          throw err
        })
      )
  }

}
