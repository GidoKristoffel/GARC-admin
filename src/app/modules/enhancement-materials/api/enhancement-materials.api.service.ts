import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiOptions } from "../../../core/constants/api.constant";
import { IEnhancementMaterialApiForm } from "../interfaces/form.interface";
import {
  IEnhancementMaterialCreateResponse, IEnhancementMaterialDeleteResponse,
  IEnhancementMaterialDetailsResponse, IEnhancementMaterialEditResponse,
  IEnhancementMaterialViewResponse
} from "../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class EnhancementMaterialsApiService {
  private readonly api: string = environment.api + '/admin/enhancement-material';

  constructor(private http: HttpClient) {}

  public create(form: IEnhancementMaterialApiForm): Observable<IEnhancementMaterialCreateResponse> {
    return this.http.post<IEnhancementMaterialCreateResponse>(this.api, form, apiOptions);
  }

  public getAll(): Observable<IEnhancementMaterialViewResponse> {
    return this.http.get<IEnhancementMaterialViewResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<IEnhancementMaterialDetailsResponse> {
    return this.http.get<IEnhancementMaterialDetailsResponse>(`${this.api}/${id}`, apiOptions);
  }

  public update(id: string, form: IEnhancementMaterialApiForm): Observable<IEnhancementMaterialEditResponse> {
    return this.http.patch<IEnhancementMaterialEditResponse>(`${this.api}/${id}`, form, apiOptions);
  }

  public delete(id: string): Observable<IEnhancementMaterialDeleteResponse> {
    return this.http.delete<IEnhancementMaterialDeleteResponse>(`${this.api}/${id}`, apiOptions);
  }
}
