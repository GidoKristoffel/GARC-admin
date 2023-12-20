import { HttpStatusCode } from "@angular/common/http";
import { IAscensionMaterial } from "./common.inteface";

export interface IAscensionMaterialCreateResponse {
  talentMaterial: IAscensionMaterial;
  status: HttpStatusCode;
}

export interface IAscensionMaterialViewResponse {
  talentMaterials: IAscensionMaterial[];
  status: HttpStatusCode;
}

export interface IAscensionMaterialDetailsResponse {
  talentMaterial: IAscensionMaterial;
  status: HttpStatusCode;
}

export interface IAscensionMaterialEditResponse {
  talentMaterial: IAscensionMaterial;
  status: HttpStatusCode;
}

export interface IAscensionMaterialDeleteResponse {
  talentMaterial: { id: string } | null;
  status: HttpStatusCode;
}
