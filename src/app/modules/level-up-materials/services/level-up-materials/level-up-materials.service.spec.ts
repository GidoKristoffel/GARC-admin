import { TestBed } from '@angular/core/testing';

import { LevelUpMaterialsService } from './level-up-materials.service';

describe('LevelUpMaterialsService', () => {
  let service: LevelUpMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelUpMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
