import { HttpStatusCode } from "@angular/common/http";
import { IWeapon } from "./common.inteface";

export interface IWeaponCreateResponse {
  weapon: IWeapon;
  status: HttpStatusCode;
}

export interface IWeaponViewResponse {
  weapons: IWeapon[];
  status: HttpStatusCode;
}

export interface IWeaponDetailsResponse {
  weapon: IWeapon;
  status: HttpStatusCode;
}

export interface IWeaponEditResponse {
  weapon: IWeapon;
  status: HttpStatusCode;
}

export interface IWeaponDeleteResponse {
  weapon: { id: string } | null;
  status: HttpStatusCode;
}
