import { TestBed } from '@angular/core/testing';

import { LevelUpMaterialsMetadataService } from './level-up-materials-metadata.service';

describe('LevelUpMaterialsMetadataService', () => {
  let service: LevelUpMaterialsMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelUpMaterialsMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
