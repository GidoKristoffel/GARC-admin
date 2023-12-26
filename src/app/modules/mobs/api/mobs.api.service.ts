import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { IMobApiForm } from "../interfaces/form.interface";
import { Observable } from "rxjs";
import {
  IMobCreateResponse,
  IMobDeleteResponse, IMobDetailsResponse,
  IMobEditResponse,
  IMobViewResponse
} from "../interfaces/api.interfaces";
import { ICharacterApiForm } from "../../characters/interfaces/form.interface";
import { apiOptions } from "../../../core/constants/api.constant";

@Injectable({
  providedIn: 'root'
})
export class MobsApiService {
  private readonly api: string = environment.api + '/admin/mob';

  constructor(private http: HttpClient) {}

  public create(form: IMobApiForm): Observable<IMobCreateResponse> {
    return this.http.post<IMobCreateResponse>(this.api, form, apiOptions);
  }

  public getAll(): Observable<IMobViewResponse> {
    return this.http.get<IMobViewResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<IMobDetailsResponse> {
    return this.http.get<IMobDetailsResponse>(`${this.api}/${id}`, apiOptions);
  }

  public update(id: string, form: IMobApiForm): Observable<IMobEditResponse> {
    return this.http.patch<IMobEditResponse>(`${this.api}/${id}`, form, apiOptions);
  }

  public delete(id: string): Observable<IMobDeleteResponse> {
    return this.http.delete<IMobDeleteResponse>(`${this.api}/${id}`, apiOptions);
  }
}
