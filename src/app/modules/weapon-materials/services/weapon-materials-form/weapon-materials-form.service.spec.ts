import { TestBed } from '@angular/core/testing';

import { WeaponMaterialsFormService } from './weapon-materials-form.service';

describe('WeaponMaterialsFormService', () => {
  let service: WeaponMaterialsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponMaterialsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
