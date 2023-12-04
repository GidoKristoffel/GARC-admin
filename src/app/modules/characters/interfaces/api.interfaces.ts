import { HttpStatusCode } from "@angular/common/http";
import { IPlayableCharacter, IPlayableCharacterResponse } from "./table.interface";

export interface ICharacterCreateFormResponse {
  character: IPlayableCharacterResponse,
  status: HttpStatusCode
}

export interface ICharacterViewFormResponse {
  character: IPlayableCharacter[],
  status: HttpStatusCode
}
