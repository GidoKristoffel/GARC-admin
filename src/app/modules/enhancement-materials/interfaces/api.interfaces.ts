import { HttpStatusCode } from "@angular/common/http";
import { IEnhancementMaterial } from "./common.inteface";

export interface IEnhancementMaterialCreateResponse {
  enhancementMaterial: IEnhancementMaterial;
  status: HttpStatusCode;
}

export interface IEnhancementMaterialViewResponse {
  enhancementMaterials: IEnhancementMaterial[];
  status: HttpStatusCode;
}

export interface IEnhancementMaterialDetailsResponse {
  enhancementMaterial: IEnhancementMaterial;
  status: HttpStatusCode;
}

export interface IEnhancementMaterialEditResponse {
  enhancementMaterial: IEnhancementMaterial;
  status: HttpStatusCode;
}

export interface IEnhancementMaterialDeleteResponse {
  enhancementMaterial: { id: string } | null;
  status: HttpStatusCode;
}
