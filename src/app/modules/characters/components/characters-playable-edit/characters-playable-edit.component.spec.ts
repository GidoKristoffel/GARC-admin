import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersPlayableEditComponent } from './characters-playable-edit.component';

describe('CharactersPlayableEditComponent', () => {
  let component: CharactersPlayableEditComponent;
  let fixture: ComponentFixture<CharactersPlayableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersPlayableEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersPlayableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
