import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersPlayableViewComponent } from './characters-playable-view.component';

describe('CharactersPlayableViewComponent', () => {
  let component: CharactersPlayableViewComponent;
  let fixture: ComponentFixture<CharactersPlayableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersPlayableViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersPlayableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
