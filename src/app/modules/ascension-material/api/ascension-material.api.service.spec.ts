import { TestBed } from '@angular/core/testing';

import { AscensionMaterialsApiService } from './ascension-materials.api.service';

describe('AscensionMaterialApiService', () => {
  let service: AscensionMaterialsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscensionMaterialsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
