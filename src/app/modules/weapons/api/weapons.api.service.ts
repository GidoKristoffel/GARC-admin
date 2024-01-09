import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiOptions } from "../../../core/constants/api.constant";
import { IWeaponApiForm } from "../interfaces/form.interface";
import {
  IWeaponCreateResponse, IWeaponDeleteResponse,
  IWeaponDetailsResponse,
  IWeaponEditResponse,
  IWeaponViewResponse
} from "../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeaponsApiService {
  private readonly api: string = environment.api + '/admin/weapons';

  constructor(private http: HttpClient) {}

  public create(form: IWeaponApiForm): Observable<IWeaponCreateResponse> {
    return this.http.post<IWeaponCreateResponse>(this.api, form, apiOptions);
  }

  public getAll(): Observable<IWeaponViewResponse> {
    return this.http.get<IWeaponViewResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<IWeaponDetailsResponse> {
    return this.http.get<IWeaponDetailsResponse>(`${this.api}/${id}`, apiOptions);
  }

  public update(id: string, form: IWeaponApiForm): Observable<IWeaponEditResponse> {
    return this.http.patch<IWeaponEditResponse>(`${this.api}/${id}`, form, apiOptions);
  }

  public delete(id: string): Observable<IWeaponDeleteResponse> {
    return this.http.delete<IWeaponDeleteResponse>(`${this.api}/${id}`, apiOptions);
  }
}
