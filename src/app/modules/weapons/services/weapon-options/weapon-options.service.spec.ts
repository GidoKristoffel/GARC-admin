import { TestBed } from '@angular/core/testing';

import { WeaponOptionsService } from './weapon-options.service';

describe('WeaponOptionsService', () => {
  let service: WeaponOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
