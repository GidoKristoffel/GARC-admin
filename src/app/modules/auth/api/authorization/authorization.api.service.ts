import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environment/environment';
import {
  accessTokenResponse,
  statusApiResponse,
} from '../../../../shared/interfaces/api.interface';
import { Observable } from 'rxjs';
import { IAuthorizationForm } from '../../interfaces/form.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationApiService {
  private readonly api: string = environment.api + '/admin/';

  constructor(private http: HttpClient) {}

  public logIn(form: IAuthorizationForm): Observable<accessTokenResponse> {
    return this.http.post<accessTokenResponse>(this.api + 'auth/login', form, {
      withCredentials: true,
    });
  }

  public logOut(): Observable<statusApiResponse> {
    return this.http.get<statusApiResponse>(this.api + 'auth/logout', {
      withCredentials: true,
    });
  }

  public refreshToken(): Observable<accessTokenResponse> {
    return this.http.get<accessTokenResponse>(this.api + 'auth/refresh', {
      withCredentials: true,
    });
  }
}
