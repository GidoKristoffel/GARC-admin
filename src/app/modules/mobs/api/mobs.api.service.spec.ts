import { TestBed } from '@angular/core/testing';

import { MobsApiService } from './mobs.api.service';

describe('MobsApiService', () => {
  let service: MobsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
