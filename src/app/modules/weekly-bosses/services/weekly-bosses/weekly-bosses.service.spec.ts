import { TestBed } from '@angular/core/testing';

import { WeeklyBossesService } from './weekly-bosses.service';

describe('WeeklyBossesService', () => {
  let service: WeeklyBossesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyBossesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
