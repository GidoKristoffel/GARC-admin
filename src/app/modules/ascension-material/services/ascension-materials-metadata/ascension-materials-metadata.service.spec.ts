import { TestBed } from '@angular/core/testing';

import { AscensionMaterialsMetadataService } from './ascension-materials-metadata.service';

describe('AscensionMaterialsMetadataService', () => {
  let service: AscensionMaterialsMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscensionMaterialsMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
