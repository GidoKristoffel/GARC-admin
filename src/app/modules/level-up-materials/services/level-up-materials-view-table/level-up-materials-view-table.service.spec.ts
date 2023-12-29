import { TestBed } from '@angular/core/testing';

import { LevelUpMaterialsViewTableService } from './level-up-materials-view-table.service';

describe('LevelUpMaterialsViewTableService', () => {
  let service: LevelUpMaterialsViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelUpMaterialsViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
