import { TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryApi } from './artifact-leveling-category.api';

describe('ArtifactLevelingCategoryApi', () => {
  let service: ArtifactLevelingCategoryApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactLevelingCategoryApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
