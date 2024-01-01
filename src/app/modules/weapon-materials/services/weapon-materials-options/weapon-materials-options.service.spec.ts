import { TestBed } from '@angular/core/testing';

import { WeaponMaterialsOptionsService } from './weapon-materials-options.service';

describe('WeaponMaterialsOptionsService', () => {
  let service: WeaponMaterialsOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponMaterialsOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
