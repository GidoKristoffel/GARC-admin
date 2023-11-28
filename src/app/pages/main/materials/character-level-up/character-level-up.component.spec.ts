import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLevelUpComponent } from './character-level-up.component';

describe('CharacterLevelUpComponent', () => {
  let component: CharacterLevelUpComponent;
  let fixture: ComponentFixture<CharacterLevelUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterLevelUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterLevelUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
