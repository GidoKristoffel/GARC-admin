import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWeaponEnhancementComponent } from './character-weapon-enhancement.component';

describe('CharacterWeaponEnhancementComponent', () => {
  let component: CharacterWeaponEnhancementComponent;
  let fixture: ComponentFixture<CharacterWeaponEnhancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterWeaponEnhancementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterWeaponEnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
