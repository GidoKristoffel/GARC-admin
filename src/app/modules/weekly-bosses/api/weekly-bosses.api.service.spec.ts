import { TestBed } from '@angular/core/testing';

import { WeeklyBossesApiService } from './weekly-bosses.api.service';

describe('WeeklyBossesApiService', () => {
  let service: WeeklyBossesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyBossesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
