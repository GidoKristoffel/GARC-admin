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

@Injectable({
  providedIn: 'root'
})
export class WeeklyBossesApiService {
  private readonly api: string = environment.api + '/admin/weekly-boss';
  private readonly credentialsOptions: { withCredentials: boolean } = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  public create(form: IWeeklyBossApiForm): Observable<IWeeklyBossCreateResponse> {
    return this.http.post<IWeeklyBossCreateResponse>(
      this.api,
      form,
      this.credentialsOptions,
    );
  }

  public getAll(): Observable<IWeeklyBossViewResponse> {
    return this.http.get<IWeeklyBossViewResponse>(this.api, this.credentialsOptions);
  }

  public getById(id: string): Observable<IWeeklyBossDetailsResponse> {
    return this.http.get<IWeeklyBossDetailsResponse>(`${this.api}/${id}`, this.credentialsOptions);
  }

  public update(id: string, form: IWeeklyBossApiForm): Observable<IWeeklyBossEditResponse> {
    return this.http.patch<IWeeklyBossEditResponse>(`${this.api}/${id}`, form, this.credentialsOptions);
  }

  public delete(id: string): Observable<IWeeklyBossDeleteResponse> {
    return this.http.delete<IWeeklyBossDeleteResponse>(`${this.api}/${id}`, this.credentialsOptions);
  }
}
