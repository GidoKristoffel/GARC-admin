import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWeaponEnhancementEditPageComponent } from './character-weapon-enhancement-edit-page.component';

describe('CharacterWeaponEnhancementEditPageComponent', () => {
  let component: CharacterWeaponEnhancementEditPageComponent;
  let fixture: ComponentFixture<CharacterWeaponEnhancementEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterWeaponEnhancementEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterWeaponEnhancementEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
