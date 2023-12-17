import { TestBed } from '@angular/core/testing';

import { TalentMaterialsFormService } from './talent-materials-form.service';

describe('TalentMaterialsFormService', () => {
  let service: TalentMaterialsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentMaterialsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
