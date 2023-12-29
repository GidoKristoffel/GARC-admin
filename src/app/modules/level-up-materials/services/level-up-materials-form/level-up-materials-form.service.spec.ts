import { TestBed } from '@angular/core/testing';

import { LevelUpMaterialsFormService } from './level-up-materials-form.service';

describe('LevelUpMaterialsFormService', () => {
  let service: LevelUpMaterialsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelUpMaterialsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
