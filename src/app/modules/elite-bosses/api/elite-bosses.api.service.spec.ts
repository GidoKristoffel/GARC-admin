import { TestBed } from '@angular/core/testing';

import { EliteBossesApiService } from './elite-bosses.api.service';

describe('EliteBossesApiService', () => {
  let service: EliteBossesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliteBossesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
