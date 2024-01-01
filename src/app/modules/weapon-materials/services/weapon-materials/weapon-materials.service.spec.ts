import { TestBed } from '@angular/core/testing';

import { WeaponMaterialsService } from './weapon-materials.service';

describe('WeaponMaterialsService', () => {
  let service: WeaponMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
