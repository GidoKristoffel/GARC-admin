import { TestBed } from '@angular/core/testing';

import { EnhancementMaterialsViewTableService } from './enhancement-materials-view-table.service';

describe('EnhancementMaterialsViewTableService', () => {
  let service: EnhancementMaterialsViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnhancementMaterialsViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
