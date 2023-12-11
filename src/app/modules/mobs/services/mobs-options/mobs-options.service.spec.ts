import { TestBed } from '@angular/core/testing';

import { MobsOptionsService } from './mobs-options.service';

describe('MobsOptionsService', () => {
  let service: MobsOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobsOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
