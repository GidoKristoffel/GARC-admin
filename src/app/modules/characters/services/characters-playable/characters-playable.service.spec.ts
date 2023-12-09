import { TestBed } from '@angular/core/testing';

import { CharactersPlayableService } from './characters-playable.service';

describe('CharactersPlayableService', () => {
  let service: CharactersPlayableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersPlayableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
