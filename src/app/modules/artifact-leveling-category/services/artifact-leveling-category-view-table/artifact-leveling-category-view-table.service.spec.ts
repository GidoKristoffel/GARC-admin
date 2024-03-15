import { TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryViewTableService } from './artifact-leveling-category-view-table.service';

describe('ArtifactLevelingCategoryViewTableService', () => {
  let service: ArtifactLevelingCategoryViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactLevelingCategoryViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
