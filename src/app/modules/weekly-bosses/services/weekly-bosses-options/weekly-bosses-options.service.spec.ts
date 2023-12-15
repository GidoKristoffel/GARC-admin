import { TestBed } from '@angular/core/testing';

import { WeeklyBossesOptionsService } from './weekly-bosses-options.service';

describe('WeeklyBossesOptionsService', () => {
  let service: WeeklyBossesOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyBossesOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
