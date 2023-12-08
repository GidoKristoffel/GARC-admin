import { TestBed } from '@angular/core/testing';

import { CharactersPlayableViewTableService } from './characters-playable-view-table.service';

describe('CharactersPlayableViewTableService', () => {
  let service: CharactersPlayableViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersPlayableViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
