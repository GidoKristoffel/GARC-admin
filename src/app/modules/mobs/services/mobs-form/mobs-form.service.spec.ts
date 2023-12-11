import { TestBed } from '@angular/core/testing';

import { MobsFormService } from './mobs-form.service';

describe('MobsFormService', () => {
  let service: MobsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
