import { inject, Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, RedirectCommand, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../../modules/auth/services/auth.service";
import { map, catchError, of } from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = localStorage.getItem('userToken') ?? '';

  return authService.isAuth(token).pipe(
    map((valid) =>
      valid
        ? true
        : router.createUrlTree([''], { queryParams: { redirect: state.url } })
    ),
    // catchError(() =>{}    )
  );
};
