import { HttpStatusCode } from "@angular/common/http";
import { ITalentMaterial } from "./common.inteface";

export interface ITalentMaterialCreateResponse {
  talentMaterial: ITalentMaterial;
  status: HttpStatusCode;
}

export interface ITalentMaterialViewResponse {
  talentMaterials: ITalentMaterial[];
  status: HttpStatusCode;
}

export interface ITalentMaterialDetailsResponse {
  talentMaterial: ITalentMaterial;
  status: HttpStatusCode;
}

export interface ITalentMaterialEditResponse {
  talentMaterial: ITalentMaterial;
  status: HttpStatusCode;
}

export interface ITalentMaterialDeleteResponse {
  talentMaterial: { id: string } | null;
  status: HttpStatusCode;
}
