import { TestBed } from '@angular/core/testing';

import { WeaponFormService } from './weapon-form.service';

describe('WeaponFormService', () => {
  let service: WeaponFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
