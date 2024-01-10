import { TestBed } from '@angular/core/testing';

import { WeaponMetadataService } from './weapon-metadata.service';

describe('WeaponMetadataService', () => {
  let service: WeaponMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
