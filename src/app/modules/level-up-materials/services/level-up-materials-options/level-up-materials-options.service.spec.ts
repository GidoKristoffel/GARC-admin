import { TestBed } from '@angular/core/testing';

import { LevelUpMaterialsOptionsService } from './level-up-materials-options.service';

describe('LevelUpMaterialsOptionsService', () => {
  let service: LevelUpMaterialsOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelUpMaterialsOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
