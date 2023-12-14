import { TestBed } from '@angular/core/testing';

import { EliteBossesService } from './elite-bosses.service';

describe('EliteBossesService', () => {
  let service: EliteBossesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliteBossesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
