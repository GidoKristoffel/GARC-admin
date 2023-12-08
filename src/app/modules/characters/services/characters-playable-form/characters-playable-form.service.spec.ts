import { TestBed } from '@angular/core/testing';

import { CharactersPlayableFormService } from './characters-playable-form.service';

describe('CharactersPlayableFormService', () => {
  let service: CharactersPlayableFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersPlayableFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
