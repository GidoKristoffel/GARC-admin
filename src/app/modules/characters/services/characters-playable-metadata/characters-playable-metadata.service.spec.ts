import { TestBed } from '@angular/core/testing';

import { CharactersPlayableMetadataService } from './characters-playable-metadata.service';

describe('CharactersPlayableMetadataService', () => {
  let service: CharactersPlayableMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersPlayableMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
