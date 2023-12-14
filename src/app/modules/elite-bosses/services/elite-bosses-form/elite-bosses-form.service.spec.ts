import { TestBed } from '@angular/core/testing';

import { EliteBossesFormService } from './elite-bosses-form.service';

describe('EliteBossesFormService', () => {
  let service: EliteBossesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliteBossesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
