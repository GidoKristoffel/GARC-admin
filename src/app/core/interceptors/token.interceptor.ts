import { HttpInterceptorFn } from '@angular/common/http';
import { ELocalStorage } from '../enums/local-storage.enum';
import { catchError, map, switchMap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthorizationApiService } from '../../modules/auth/api/authorization/authorization.api.service';
import { accessTokenResponse } from '../../shared/interfaces/api.interface';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authorizationApiService: AuthorizationApiService = inject(
    AuthorizationApiService,
  );
  const localStorageService: LocalStorageService = inject(LocalStorageService);
  const token: string = localStorageService.get(ELocalStorage.Token);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: token,
      },
    });
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        return authorizationApiService.refreshToken().pipe(
          map((newToken: accessTokenResponse): void => {
            localStorageService.set(ELocalStorage.Token, newToken.accessToken);
          }),
          switchMap(() => {
            const token: string = localStorageService.get(ELocalStorage.Token);

            if (token) {
              req = req.clone({
                setHeaders: {
                  Authorization: token,
                },
              });
            }

            return next(req);
          }),
          catchError((refreshError) => {
            return throwError(refreshError);
          }),
        );
      }

      return throwError(error);
    }),
  );
};
