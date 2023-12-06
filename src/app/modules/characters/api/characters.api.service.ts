import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { statusApiResponse } from "../../../shared/interfaces/api.interface";
import { ICharacterCreateForm } from "../../auth/interfaces/form.interface";
import {
  ICharacterCreateFormResponse,
  ICharacterDeleteFormResponse, ICharacterDetailFormResponse,
  ICharacterViewFormResponse
} from "../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  private readonly api: string = environment.api + '/admin/';

  constructor(
    private http: HttpClient
  ) {}

  public create(form: ICharacterCreateForm): Observable<ICharacterCreateFormResponse> {
    return this.http.post<ICharacterCreateFormResponse>(this.api + 'character', form, {withCredentials: true});
  }

  public getAll(): Observable<ICharacterViewFormResponse> {
    return this.http.get<ICharacterViewFormResponse>(this.api + 'character', {withCredentials: true});
  }

  public delete(id: string): Observable<ICharacterDeleteFormResponse> {
    return this.http.delete<ICharacterDeleteFormResponse>(this.api + 'character/' + id, {withCredentials: true});
  }

  public getById(id: string): Observable<ICharacterDetailFormResponse> {
    return this.http.get<ICharacterDetailFormResponse>(this.api + 'character/' + id, {withCredentials: true});
  }
}
