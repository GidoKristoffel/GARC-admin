import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IAscensionMaterialApiForm } from "../interfaces/form.interface";
import {
  IAscensionMaterialCreateResponse, IAscensionMaterialDeleteResponse,
  IAscensionMaterialDetailsResponse, IAscensionMaterialEditResponse,
  IAscensionMaterialViewResponse
} from "../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AscensionMaterialApiService {
  private readonly api: string = environment.api + '/admin/ascension-material';
  private readonly options: { withCredentials: boolean } = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  public create(form: IAscensionMaterialApiForm): Observable<IAscensionMaterialCreateResponse> {
    return this.http.post<IAscensionMaterialCreateResponse>(this.api, form, this.options);
  }

  public getAll(): Observable<IAscensionMaterialViewResponse> {
    return this.http.get<IAscensionMaterialViewResponse>(this.api, this.options);
  }

  public getById(id: string): Observable<IAscensionMaterialDetailsResponse> {
    return this.http.get<IAscensionMaterialDetailsResponse>(`${this.api}/${id}`, this.options);
  }

  public update(id: string, form: IAscensionMaterialApiForm): Observable<IAscensionMaterialEditResponse> {
    return this.http.patch<IAscensionMaterialEditResponse>(`${this.api}/${id}`, form, this.options);
  }

  public delete(id: string): Observable<IAscensionMaterialDeleteResponse> {
    return this.http.delete<IAscensionMaterialDeleteResponse>(`${this.api}/${id}`, this.options);
  }
}
