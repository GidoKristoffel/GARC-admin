import { TestBed } from '@angular/core/testing';

import { TalentMaterialsApiService } from './talent-materials.api.service';

describe('TalentMaterialsApiService', () => {
  let service: TalentMaterialsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentMaterialsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
