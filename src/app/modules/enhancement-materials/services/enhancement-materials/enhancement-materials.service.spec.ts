import { TestBed } from '@angular/core/testing';

import { EnhancementMaterialsService } from './enhancement-materials.service';

describe('EnhancementMaterialsService', () => {
  let service: EnhancementMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnhancementMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
