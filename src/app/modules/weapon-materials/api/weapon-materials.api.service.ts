import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiOptions } from "../../../core/constants/api.constant";
import { IWeaponMaterialApiForm } from "../interfaces/form.interface";
import {
  IWeaponMaterialCreateResponse, IWeaponMaterialDeleteResponse,
  IWeaponMaterialDetailsResponse, IWeaponMaterialEditResponse,
  IWeaponMaterialViewResponse
} from "../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeaponMaterialsApiService {
  private readonly api: string = environment.api + '/admin/weapon-material';

  constructor(private http: HttpClient) {}

  public create(form: IWeaponMaterialApiForm): Observable<IWeaponMaterialCreateResponse> {
    return this.http.post<IWeaponMaterialCreateResponse>(this.api, form, apiOptions);
  }

  public getAll(): Observable<IWeaponMaterialViewResponse> {
    return this.http.get<IWeaponMaterialViewResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<IWeaponMaterialDetailsResponse> {
    return this.http.get<IWeaponMaterialDetailsResponse>(`${this.api}/${id}`, apiOptions);
  }

  public update(id: string, form: IWeaponMaterialApiForm): Observable<IWeaponMaterialEditResponse> {
    return this.http.patch<IWeaponMaterialEditResponse>(`${this.api}/${id}`, form, apiOptions);
  }

  public delete(id: string): Observable<IWeaponMaterialDeleteResponse> {
    return this.http.delete<IWeaponMaterialDeleteResponse>(`${this.api}/${id}`, apiOptions);
  }
}
