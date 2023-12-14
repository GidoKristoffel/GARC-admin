import { TestBed } from '@angular/core/testing';

import { EliteBossesOptionsService } from './elite-bosses-options.service';

describe('EliteBossesOptionsService', () => {
  let service: EliteBossesOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliteBossesOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
