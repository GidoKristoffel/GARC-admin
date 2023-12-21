import { TestBed } from '@angular/core/testing';

import { AscensionMaterialsViewTableService } from './ascension-materials-view-table.service';

describe('AscensionMaterialsViewTableService', () => {
  let service: AscensionMaterialsViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscensionMaterialsViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
