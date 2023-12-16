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

@Injectable({
  providedIn: 'root'
})
export class TalentMaterialsApiService {
  private readonly api: string = environment.api + '/admin/talent-material';
  private readonly options: { withCredentials: boolean } = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  public create(form: ITalentMaterialApiForm): Observable<ITalentMaterialCreateResponse> {
    return this.http.post<ITalentMaterialCreateResponse>(this.api, form, this.options);
  }

  public getAll(): Observable<ITalentMaterialViewResponse> {
    return this.http.get<ITalentMaterialViewResponse>(this.api, this.options);
  }

  public getById(id: string): Observable<ITalentMaterialDetailsResponse> {
    return this.http.get<ITalentMaterialDetailsResponse>(`${this.api}/${id}`, this.options);
  }

  public update(id: string, form: ITalentMaterialApiForm): Observable<ITalentMaterialEditResponse> {
    return this.http.patch<ITalentMaterialEditResponse>(`${this.api}/${id}`, form, this.options);
  }

  public delete(id: string): Observable<ITalentMaterialDeleteResponse> {
    return this.http.delete<ITalentMaterialDeleteResponse>(`${this.api}/${id}`, this.options);
  }
}
