import { HttpStatusCode } from "@angular/common/http";

export interface accessTokenResponse {
  accessToken: string;
}

export interface statusApiResponse {
  status: HttpStatusCode;
}
