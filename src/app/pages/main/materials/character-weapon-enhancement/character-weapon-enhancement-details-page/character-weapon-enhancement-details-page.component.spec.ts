import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWeaponEnhancementDetailsPageComponent } from './character-weapon-enhancement-details-page.component';

describe('CharacterWeaponEnhancementDetailsPageComponent', () => {
  let component: CharacterWeaponEnhancementDetailsPageComponent;
  let fixture: ComponentFixture<CharacterWeaponEnhancementDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterWeaponEnhancementDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterWeaponEnhancementDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
