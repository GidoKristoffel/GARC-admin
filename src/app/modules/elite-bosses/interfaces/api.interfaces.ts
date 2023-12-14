import { HttpStatusCode } from "@angular/common/http";
import { IEliteBoss } from "./common.inteface";

export interface IEliteBossCreateResponse {
  eliteBoss: IEliteBoss;
  status: HttpStatusCode;
}

export interface IEliteBossViewResponse {
  eliteBosses: IEliteBoss[];
  status: HttpStatusCode;
}

export interface IEliteBossDetailsResponse {
  eliteBoss: IEliteBoss;
  status: HttpStatusCode;
}

export interface IEliteBossEditResponse {
  eliteBoss: IEliteBoss;
  status: HttpStatusCode;
}

export interface IEliteBossDeleteResponse {
  eliteBoss: { id: string } | null;
  status: HttpStatusCode;
}
