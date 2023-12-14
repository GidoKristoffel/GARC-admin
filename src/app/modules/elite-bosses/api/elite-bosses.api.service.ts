import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEliteBossApiForm } from '../interfaces/form.interface';
import {
  IEliteBossCreateResponse, IEliteBossDeleteResponse,
  IEliteBossDetailsResponse, IEliteBossEditResponse,
  IEliteBossViewResponse
} from '../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EliteBossesApiService {
  private readonly api: string = environment.api + '/admin/elite-boss';
  private readonly credentialsOptions: { withCredentials: boolean } = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  public create(form: IEliteBossApiForm): Observable<IEliteBossCreateResponse> {
    return this.http.post<IEliteBossCreateResponse>(
      this.api,
      form,
      this.credentialsOptions,
    );
  }

  public getAll(): Observable<IEliteBossViewResponse> {
    return this.http.get<IEliteBossViewResponse>(this.api, this.credentialsOptions);
  }

  public getById(id: string): Observable<IEliteBossDetailsResponse> {
    return this.http.get<IEliteBossDetailsResponse>(`${this.api}/${id}`, this.credentialsOptions);
  }

  public update(id: string, form: IEliteBossApiForm): Observable<IEliteBossEditResponse> {
    return this.http.patch<IEliteBossEditResponse>(`${this.api}/${id}`, form, this.credentialsOptions);
  }

  public delete(id: string): Observable<IEliteBossDeleteResponse> {
    return this.http.delete<IEliteBossDeleteResponse>(`${this.api}/${id}`, this.credentialsOptions);
  }
}
