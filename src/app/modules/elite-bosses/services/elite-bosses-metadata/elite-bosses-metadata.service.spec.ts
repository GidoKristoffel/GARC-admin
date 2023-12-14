import { TestBed } from '@angular/core/testing';

import { EliteBossesMetadataService } from './elite-bosses-metadata.service';

describe('EliteBossesMetadataService', () => {
  let service: EliteBossesMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliteBossesMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
