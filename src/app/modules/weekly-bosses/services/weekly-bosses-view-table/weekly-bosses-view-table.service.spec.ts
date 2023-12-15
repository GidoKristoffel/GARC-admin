import { TestBed } from '@angular/core/testing';

import { WeeklyBossesViewTableService } from './weekly-bosses-view-table.service';

describe('WeeklyBossesViewTableService', () => {
  let service: WeeklyBossesViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyBossesViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
