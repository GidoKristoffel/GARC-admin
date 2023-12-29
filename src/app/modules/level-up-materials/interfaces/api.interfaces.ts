import { HttpStatusCode } from "@angular/common/http";
import { ILevelUpMaterial } from "./common.inteface";

export interface ILevelUpMaterialCreateResponse {
  levelUpMaterial: ILevelUpMaterial;
  status: HttpStatusCode;
}

export interface ILevelUpMaterialViewResponse {
  levelUpMaterials: ILevelUpMaterial[];
  status: HttpStatusCode;
}

export interface ILevelUpMaterialDetailsResponse {
  levelUpMaterial: ILevelUpMaterial;
  status: HttpStatusCode;
}

export interface ILevelUpMaterialEditResponse {
  levelUpMaterial: ILevelUpMaterial;
  status: HttpStatusCode;
}

export interface ILevelUpMaterialDeleteResponse {
  levelUpMaterial: { id: string } | null;
  status: HttpStatusCode;
}
