import { TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryFormService } from './artifact-leveling-category-form.service';

describe('ArtifactLevelingCategoryFormService', () => {
  let service: ArtifactLevelingCategoryFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactLevelingCategoryFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
