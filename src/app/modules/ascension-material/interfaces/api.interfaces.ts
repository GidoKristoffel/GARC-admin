import { HttpStatusCode } from "@angular/common/http";
import { IAscensionMaterial } from "./common.inteface";

export interface IAscensionMaterialCreateResponse {
  ascensionMaterial: IAscensionMaterial;
  status: HttpStatusCode;
}

export interface IAscensionMaterialViewResponse {
  ascensionMaterials: IAscensionMaterial[];
  status: HttpStatusCode;
}

export interface IAscensionMaterialDetailsResponse {
  ascensionMaterial: IAscensionMaterial;
  status: HttpStatusCode;
}

export interface IAscensionMaterialEditResponse {
  ascensionMaterial: IAscensionMaterial;
  status: HttpStatusCode;
}

export interface IAscensionMaterialDeleteResponse {
  ascensionMaterial: { id: string } | null;
  status: HttpStatusCode;
}
