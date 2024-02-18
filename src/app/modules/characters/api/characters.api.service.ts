import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IAutocompleteCharacterResponse,
  ICharacterCreateFormResponse,
  ICharacterDeleteFormResponse,
  ICharacterDetailFormResponse,
  ICharacterEditFormResponse,
  ICharacterViewFormResponse,
} from '../interfaces/api.interfaces';
import { ICharacterApiForm } from '../interfaces/form.interface';
import { apiOptions } from '../../../core/constants/api.constant';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiService {
  private readonly api: string = environment.api + '/admin/character';

  constructor(private http: HttpClient) {}

  public create(
    form: ICharacterApiForm,
  ): Observable<ICharacterCreateFormResponse> {
    return this.http.post<ICharacterCreateFormResponse>(
      this.api,
      form,
      apiOptions,
    );
  }

  public getDataAutocomplete(
    id: string,
  ): Observable<IAutocompleteCharacterResponse> {
    return this.http.get<IAutocompleteCharacterResponse>(
      `${this.api}/data-autocomplete/${id}`,
      apiOptions,
    );
  }

  public getAll(): Observable<ICharacterViewFormResponse> {
    return this.http.get<ICharacterViewFormResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<ICharacterDetailFormResponse> {
    return this.http.get<ICharacterDetailFormResponse>(
      `${this.api}/${id}`,
      apiOptions,
    );
  }

  public update(
    id: string,
    form: ICharacterApiForm,
  ): Observable<ICharacterEditFormResponse> {
    return this.http.patch<ICharacterEditFormResponse>(
      `${this.api}/${id}`,
      form,
      apiOptions,
    );
  }

  public delete(id: string): Observable<ICharacterDeleteFormResponse> {
    return this.http.delete<ICharacterDeleteFormResponse>(
      `${this.api}/${id}`,
      apiOptions,
    );
  }
}
