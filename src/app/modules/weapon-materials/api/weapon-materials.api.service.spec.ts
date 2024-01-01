import { TestBed } from '@angular/core/testing';

import { WeaponMaterialsApiService } from './weapon-materials.api.service';

describe('WeaponMaterialsApiService', () => {
  let service: WeaponMaterialsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponMaterialsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
