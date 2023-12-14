import { TestBed } from '@angular/core/testing';

import { EliteBossesViewTableService } from './elite-bosses-view-table.service';

describe('EliteBossesViewTableService', () => {
  let service: EliteBossesViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliteBossesViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
