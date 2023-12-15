import { TestBed } from '@angular/core/testing';

import { WeeklyBossesMetadataService } from './weekly-bosses-metadata.service';

describe('WeeklyBossesMetadataService', () => {
  let service: WeeklyBossesMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyBossesMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
