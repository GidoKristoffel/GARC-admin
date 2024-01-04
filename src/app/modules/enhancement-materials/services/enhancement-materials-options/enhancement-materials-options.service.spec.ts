import { TestBed } from '@angular/core/testing';

import { EnhancementMaterialsOptionsService } from './enhancement-materials-options.service';

describe('EnhancementMaterialsOptionsService', () => {
  let service: EnhancementMaterialsOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnhancementMaterialsOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
