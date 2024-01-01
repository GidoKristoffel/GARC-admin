import { IWeaponMaterial } from './common.inteface';
import { HttpStatusCode } from '@angular/common/http';

export interface IWeaponMaterialCreateResponse {
  weaponMaterial: IWeaponMaterial;
  status: HttpStatusCode;
}

export interface IWeaponMaterialViewResponse {
  weaponMaterials: IWeaponMaterial[];
  status: HttpStatusCode;
}

export interface IWeaponMaterialDetailsResponse {
  weaponMaterial: IWeaponMaterial;
  status: HttpStatusCode;
}

export interface IWeaponMaterialEditResponse {
  weaponMaterial: IWeaponMaterial;
  status: HttpStatusCode;
}

export interface IWeaponMaterialDeleteResponse {
  weaponMaterial: { id: string } | null;
  status: HttpStatusCode;
}
