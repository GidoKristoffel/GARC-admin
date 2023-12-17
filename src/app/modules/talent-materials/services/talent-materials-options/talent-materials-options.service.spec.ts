import { TestBed } from '@angular/core/testing';

import { TalentMaterialsOptionsService } from './talent-materials-options.service';

describe('TalentMaterialsOptionsService', () => {
  let service: TalentMaterialsOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentMaterialsOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
