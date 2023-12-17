import { TestBed } from '@angular/core/testing';

import { TalentMaterialsMetadataService } from './talent-materials-metadata.service';

describe('TalentMaterialsMetadataService', () => {
  let service: TalentMaterialsMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentMaterialsMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
