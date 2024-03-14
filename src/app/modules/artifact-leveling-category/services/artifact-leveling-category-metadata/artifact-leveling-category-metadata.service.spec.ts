import { TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryMetadataService } from './artifact-leveling-category-metadata.service';

describe('ArtifactLevelingCategoryMetadataService', () => {
  let service: ArtifactLevelingCategoryMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactLevelingCategoryMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
