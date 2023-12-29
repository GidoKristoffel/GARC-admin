import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { apiOptions } from "../../../core/constants/api.constant";
import { ILevelUpMaterialApiForm } from "../interfaces/form.interface";
import {
  ILevelUpMaterialCreateResponse, ILevelUpMaterialDeleteResponse,
  ILevelUpMaterialDetailsResponse, ILevelUpMaterialEditResponse,
  ILevelUpMaterialViewResponse
} from "../interfaces/api.interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LevelUpMaterialsApiService {
  private readonly api: string = environment.api + '/admin/level-up-material';

  constructor(private http: HttpClient) {}

  public create(form: ILevelUpMaterialApiForm): Observable<ILevelUpMaterialCreateResponse> {
    return this.http.post<ILevelUpMaterialCreateResponse>(this.api, form, apiOptions);
  }

  public getAll(): Observable<ILevelUpMaterialViewResponse> {
    return this.http.get<ILevelUpMaterialViewResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<ILevelUpMaterialDetailsResponse> {
    return this.http.get<ILevelUpMaterialDetailsResponse>(`${this.api}/${id}`, apiOptions);
  }

  public update(id: string, form: ILevelUpMaterialApiForm): Observable<ILevelUpMaterialEditResponse> {
    return this.http.patch<ILevelUpMaterialEditResponse>(`${this.api}/${id}`, form, apiOptions);
  }

  public delete(id: string): Observable<ILevelUpMaterialDeleteResponse> {
    return this.http.delete<ILevelUpMaterialDeleteResponse>(`${this.api}/${id}`, apiOptions);
  }
}
