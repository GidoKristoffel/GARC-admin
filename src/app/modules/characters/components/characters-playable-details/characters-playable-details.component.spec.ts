import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersPlayableDetailsComponent } from './characters-playable-details.component';

describe('CharactersPlayableDetailsComponent', () => {
  let component: CharactersPlayableDetailsComponent;
  let fixture: ComponentFixture<CharactersPlayableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersPlayableDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersPlayableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
