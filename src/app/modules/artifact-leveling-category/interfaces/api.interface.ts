import { HttpStatusCode } from "@angular/common/http";
import { IArtifactLevelingCategory } from "./common.inteface";

export interface IArtifactLevelingCategoryCreateResponse {
  artifactLevelingCategory: IArtifactLevelingCategory;
  status: HttpStatusCode;
}

export interface IArtifactLevelingCategoryViewResponse {
  artifactLevelingCategories: IArtifactLevelingCategory[];
  status: HttpStatusCode;
}

export interface IArtifactLevelingCategoryDetailsResponse {
  artifactLevelingCategory: IArtifactLevelingCategory;
  status: HttpStatusCode;
}

export interface IArtifactLevelingCategoryEditResponse {
  artifactLevelingCategory: IArtifactLevelingCategory;
  status: HttpStatusCode;
}

export interface IArtifactLevelingCategoryDeleteResponse {
  artifactLevelingCategory: { id: string } | null;
  status: HttpStatusCode;
}
