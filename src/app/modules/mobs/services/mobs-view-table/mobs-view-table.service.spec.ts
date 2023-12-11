import { TestBed } from '@angular/core/testing';

import { MobsViewTableService } from './mobs-view-table.service';

describe('MobsViewTableService', () => {
  let service: MobsViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobsViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
