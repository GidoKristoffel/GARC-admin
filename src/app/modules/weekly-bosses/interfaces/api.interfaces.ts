import { HttpStatusCode } from '@angular/common/http';
import { IWeeklyBoss } from './common.inteface';

export interface IWeeklyBossCreateResponse {
  weeklyBoss: IWeeklyBoss;
  status: HttpStatusCode;
}

export interface IWeeklyBossViewResponse {
  weeklyBosses: IWeeklyBoss[];
  status: HttpStatusCode;
}

export interface IWeeklyBossDetailsResponse {
  weeklyBoss: IWeeklyBoss;
  status: HttpStatusCode;
}

export interface IWeeklyBossEditResponse {
  weeklyBoss: IWeeklyBoss;
  status: HttpStatusCode;
}

export interface IWeeklyBossDeleteResponse {
  weeklyBoss: { id: string } | null;
  status: HttpStatusCode;
}
