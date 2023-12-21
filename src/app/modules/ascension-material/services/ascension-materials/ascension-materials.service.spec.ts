import { TestBed } from '@angular/core/testing';

import { AscensionMaterialsService } from './ascension-materials.service';

describe('AscensionMaterialService', () => {
  let service: AscensionMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscensionMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
