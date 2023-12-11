import { HttpStatusCode } from "@angular/common/http";
import { IMob } from "./common.inteface";

export interface IMobCreateResponse {
  mob: IMob;
  status: HttpStatusCode;
}

export interface IMobViewResponse {
  mobs: IMob[];
  status: HttpStatusCode;
}

export interface IMobDetailsResponse {
  mob: IMob;
  status: HttpStatusCode;
}

export interface IMobEditResponse {
  mob: IMob;
  status: HttpStatusCode;
}

export interface IMobDeleteResponse {
  mob: { id: string } | null;
  status: HttpStatusCode;
}
