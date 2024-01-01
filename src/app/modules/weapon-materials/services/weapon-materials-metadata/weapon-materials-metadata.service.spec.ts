import { TestBed } from '@angular/core/testing';

import { WeaponMaterialsMetadataService } from './weapon-materials-metadata.service';

describe('WeaponMaterialsMetadataService', () => {
  let service: WeaponMaterialsMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponMaterialsMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
