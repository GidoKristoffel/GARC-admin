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

export interface ICharacterDeleteFormResponse {
  character: {id: string} | null,
  status: HttpStatusCode
}

export interface ICharacterDetailFormResponse {
  character: IPlayableCharacter,
  status: HttpStatusCode
}
