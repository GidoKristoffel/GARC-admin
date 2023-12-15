import { TestBed } from '@angular/core/testing';

import { WeeklyBossesFormService } from './weekly-bosses-form.service';

describe('WeeklyBossesFormService', () => {
  let service: WeeklyBossesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyBossesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
