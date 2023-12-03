import { HttpStatusCode } from "@angular/common/http";
import { IPlayableCharacterResponse } from "./table.interface";

export interface ICharacterCreateFormResponse {
  character: IPlayableCharacterResponse,
  status: HttpStatusCode
}

export interface ICharacterViewFormResponse {
  character: IPlayableCharacterResponse[],
  status: HttpStatusCode
}
