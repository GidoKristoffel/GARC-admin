import { TestBed } from '@angular/core/testing';

import { MobsMetadataService } from './mobs-metadata.service';

describe('MobsMetadataService', () => {
  let service: MobsMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobsMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
