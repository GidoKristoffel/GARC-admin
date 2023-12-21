import { TestBed } from '@angular/core/testing';

import { AscensionMaterialApiService } from './ascension-material.api.service';

describe('AscensionMaterialApiService', () => {
  let service: AscensionMaterialApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscensionMaterialApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
