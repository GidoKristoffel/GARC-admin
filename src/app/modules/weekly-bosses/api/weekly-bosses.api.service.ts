import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IWeeklyBossApiForm } from "../interfaces/form.interface";
import {
  IWeeklyBossCreateResponse, IWeeklyBossDeleteResponse,
  IWeeklyBossDetailsResponse, IWeeklyBossEditResponse,
  IWeeklyBossViewResponse
} from "../interfaces/api.interfaces";
import { apiOptions } from "../../../core/constants/api.constant";

@Injectable({
  providedIn: 'root'
})
export class WeeklyBossesApiService {
  private readonly api: string = environment.api + '/admin/weekly-boss';

  constructor(private http: HttpClient) {}

  public create(form: IWeeklyBossApiForm): Observable<IWeeklyBossCreateResponse> {
    return this.http.post<IWeeklyBossCreateResponse>(
      this.api,
      form,
      apiOptions
    );
  }

  public getAll(): Observable<IWeeklyBossViewResponse> {
    return this.http.get<IWeeklyBossViewResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<IWeeklyBossDetailsResponse> {
    return this.http.get<IWeeklyBossDetailsResponse>(`${this.api}/${id}`, apiOptions);
  }

  public update(id: string, form: IWeeklyBossApiForm): Observable<IWeeklyBossEditResponse> {
    return this.http.patch<IWeeklyBossEditResponse>(`${this.api}/${id}`, form, apiOptions);
  }

  public delete(id: string): Observable<IWeeklyBossDeleteResponse> {
    return this.http.delete<IWeeklyBossDeleteResponse>(`${this.api}/${id}`, apiOptions);
  }
}
