import { TestBed } from '@angular/core/testing';

import { AscensionMaterialsOptionsService } from './ascension-materials-options.service';

describe('AscensionMaterialsOptionsService', () => {
  let service: AscensionMaterialsOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscensionMaterialsOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
