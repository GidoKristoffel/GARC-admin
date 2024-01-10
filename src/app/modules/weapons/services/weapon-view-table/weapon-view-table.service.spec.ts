import { TestBed } from '@angular/core/testing';

import { WeaponViewTableService } from './weapon-view-table.service';

describe('WeaponViewTableService', () => {
  let service: WeaponViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
