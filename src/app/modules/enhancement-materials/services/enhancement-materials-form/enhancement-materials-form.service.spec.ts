import { TestBed } from '@angular/core/testing';

import { EnhancementMaterialsFormService } from './enhancement-materials-form.service';

describe('EnhancementMaterialsFormService', () => {
  let service: EnhancementMaterialsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnhancementMaterialsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
