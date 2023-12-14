import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ICharacterCreateFormResponse,
  ICharacterDeleteFormResponse,
  ICharacterDetailFormResponse,
  ICharacterEditFormResponse,
  ICharacterViewFormResponse,
} from '../interfaces/api.interfaces';
import { ICharacterApiForm } from '../interfaces/form.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiService {
  private readonly api: string = environment.api + '/admin/character';
  private readonly credentialsOptions: { withCredentials: boolean } = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  public create(
    form: ICharacterApiForm,
  ): Observable<ICharacterCreateFormResponse> {
    return this.http.post<ICharacterCreateFormResponse>(
      this.api,
      form,
      this.credentialsOptions,
    );
  }

  public getAll(): Observable<ICharacterViewFormResponse> {
    return this.http.get<ICharacterViewFormResponse>(
      this.api,
      this.credentialsOptions,
    );
  }

  public getById(id: string): Observable<ICharacterDetailFormResponse> {
    return this.http.get<ICharacterDetailFormResponse>(
      `${this.api}/${id}`,
      this.credentialsOptions,
    );
  }

  public update(
    id: string,
    form: ICharacterApiForm,
  ): Observable<ICharacterEditFormResponse> {
    return this.http.patch<ICharacterEditFormResponse>(
      `${this.api}/${id}`,
      form,
      this.credentialsOptions,
    );
  }

  public delete(id: string): Observable<ICharacterDeleteFormResponse> {
    return this.http.delete<ICharacterDeleteFormResponse>(
      `${this.api}/${id}`,
      this.credentialsOptions,
    );
  }
}
