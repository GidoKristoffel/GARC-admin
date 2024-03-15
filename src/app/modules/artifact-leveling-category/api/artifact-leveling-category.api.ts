import { Injectable } from '@angular/core';
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiOptions } from "../../../core/constants/api.constant";
import { IArtifactLevelingCategoryApiForm } from "../interfaces/form.interface";
import {
  IArtifactLevelingCategoryCreateResponse, IArtifactLevelingCategoryDeleteResponse,
  IArtifactLevelingCategoryDetailsResponse,
  IArtifactLevelingCategoryEditResponse,
  IArtifactLevelingCategoryViewResponse
} from "../interfaces/api.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtifactLevelingCategoryApi {
  private readonly api: string = environment.api + '/admin/ascension-material';

  constructor(private http: HttpClient) {}

  public create(form: IArtifactLevelingCategoryApiForm): Observable<IArtifactLevelingCategoryCreateResponse> {
    return this.http.post<IArtifactLevelingCategoryCreateResponse>(this.api, form, apiOptions);
  }

  public getAll(): Observable<IArtifactLevelingCategoryViewResponse> {
    return this.http.get<IArtifactLevelingCategoryViewResponse>(this.api, apiOptions);
  }

  public getById(id: string): Observable<IArtifactLevelingCategoryDetailsResponse> {
    return this.http.get<IArtifactLevelingCategoryDetailsResponse>(`${this.api}/${id}`, apiOptions);
  }

  public update(id: string, form: IArtifactLevelingCategoryApiForm): Observable<IArtifactLevelingCategoryEditResponse> {
    return this.http.patch<IArtifactLevelingCategoryEditResponse>(`${this.api}/${id}`, form, apiOptions);
  }

  public delete(id: string): Observable<IArtifactLevelingCategoryDeleteResponse> {
    return this.http.delete<IArtifactLevelingCategoryDeleteResponse>(`${this.api}/${id}`, apiOptions);
  }
}
