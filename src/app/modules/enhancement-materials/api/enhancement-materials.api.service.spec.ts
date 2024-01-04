import { TestBed } from '@angular/core/testing';

import { EnhancementMaterialsApiService } from './enhancement-materials.api.service';

describe('EnhancementMaterialsApiService', () => {
  let service: EnhancementMaterialsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnhancementMaterialsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
