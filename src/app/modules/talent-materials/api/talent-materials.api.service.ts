import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITalentMaterialApiForm } from "../interfaces/form.interface";
import {
  ITalentMaterialCreateResponse, ITalentMaterialDeleteResponse,
  ITalentMaterialDetailsResponse, ITalentMaterialEditResponse,
  ITalentMaterialViewResponse
} from "../interfaces/api.interfaces";
import { apiOptions } from "../../../core/constants/api.constant";

@Injectable({
  providedIn: 'root'
})
export class TalentMaterialsApiService {
  private readonly api: string = environment.api + '/admin/talent-material';

  constructor(private http: HttpClient) {}

  public create(form: ITalentMaterialApiForm): Observable<ITalentMaterialCreateResponse> {
    return this.http.post<ITalentMaterialCreateResponse>(this.api, form, apiOptions);
  }

  public getAll(): Observable<ITalentMaterialViewResponse> {
    return this.http.get<ITalentMaterialViewResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<ITalentMaterialDetailsResponse> {
    return this.http.get<ITalentMaterialDetailsResponse>(`${this.api}/${id}`, apiOptions);
  }

  public update(id: string, form: ITalentMaterialApiForm): Observable<ITalentMaterialEditResponse> {
    return this.http.patch<ITalentMaterialEditResponse>(`${this.api}/${id}`, form, apiOptions);
  }

  public delete(id: string): Observable<ITalentMaterialDeleteResponse> {
    return this.http.delete<ITalentMaterialDeleteResponse>(`${this.api}/${id}`, apiOptions);
  }
}
