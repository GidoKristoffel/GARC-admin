import { TestBed } from '@angular/core/testing';

import { CharactersPlayableOptionsService } from './characters-playable-options.service';

describe('CharactersPlayableOptionsService', () => {
  let service: CharactersPlayableOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersPlayableOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
