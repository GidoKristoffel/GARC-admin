import { TestBed } from '@angular/core/testing';

import { WeaponMaterialsViewTableService } from './weapon-materials-view-table.service';

describe('WeaponMaterialsViewTableService', () => {
  let service: WeaponMaterialsViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponMaterialsViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
