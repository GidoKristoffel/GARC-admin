import { TestBed } from '@angular/core/testing';

import { AscensionMaterialsFormService } from './ascension-materials-form.service';

describe('AscensionMaterialsFormService', () => {
  let service: AscensionMaterialsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscensionMaterialsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
