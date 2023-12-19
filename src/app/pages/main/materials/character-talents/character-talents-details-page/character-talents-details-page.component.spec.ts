import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTalentsDetailsPageComponent } from './character-talents-details-page.component';

describe('CharacterTalentsDetailsPageComponent', () => {
  let component: CharacterTalentsDetailsPageComponent;
  let fixture: ComponentFixture<CharacterTalentsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTalentsDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterTalentsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
