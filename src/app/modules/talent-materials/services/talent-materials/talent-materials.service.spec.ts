import { TestBed } from '@angular/core/testing';

import { TalentMaterialsService } from './talent-materials.service';

describe('TalentMaterialsService', () => {
  let service: TalentMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
