import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { statusApiResponse } from "../../../shared/interfaces/api.interface";
import { ICharacterCreateForm } from "../../auth/interfaces/form.interface";

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  private readonly api: string = environment.api + '/admin/';

  constructor(
    private http: HttpClient
  ) {}

  public create(form: ICharacterCreateForm): Observable<statusApiResponse> {
    return this.http.post<statusApiResponse>(this.api + 'character', form, {withCredentials: true});
  }
}
