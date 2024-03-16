import { TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryService } from './artifact-leveling-category.service';

describe('ArtifactLevelingCategoryService', () => {
  let service: ArtifactLevelingCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactLevelingCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
