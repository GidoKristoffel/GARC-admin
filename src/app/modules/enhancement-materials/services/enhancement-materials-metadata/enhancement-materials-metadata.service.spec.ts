import { TestBed } from '@angular/core/testing';

import { EnhancementMaterialsMetadataService } from './enhancement-materials-metadata.service';

describe('EnhancementMaterialsMetadataService', () => {
  let service: EnhancementMaterialsMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnhancementMaterialsMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
