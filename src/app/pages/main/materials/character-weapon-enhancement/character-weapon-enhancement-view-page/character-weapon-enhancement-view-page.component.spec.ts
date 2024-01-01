import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWeaponEnhancementViewPageComponent } from './character-weapon-enhancement-view-page.component';

describe('CharacterWeaponEnhancementViewPageComponent', () => {
  let component: CharacterWeaponEnhancementViewPageComponent;
  let fixture: ComponentFixture<CharacterWeaponEnhancementViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterWeaponEnhancementViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterWeaponEnhancementViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
