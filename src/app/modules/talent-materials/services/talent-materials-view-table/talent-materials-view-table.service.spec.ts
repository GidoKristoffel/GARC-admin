import { TestBed } from '@angular/core/testing';

import { TalentMaterialsViewTableService } from './talent-materials-view-table.service';

describe('TalentMaterialsViewTableService', () => {
  let service: TalentMaterialsViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentMaterialsViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
