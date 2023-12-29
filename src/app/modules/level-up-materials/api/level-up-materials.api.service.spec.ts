import { TestBed } from '@angular/core/testing';

import { LevelUpMaterialsApiService } from './level-up-materials.api.service';

describe('LevelUpMaterialsApiService', () => {
  let service: LevelUpMaterialsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelUpMaterialsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
