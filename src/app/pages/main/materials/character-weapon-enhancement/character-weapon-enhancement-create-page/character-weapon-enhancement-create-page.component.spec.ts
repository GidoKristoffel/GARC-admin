import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWeaponEnhancementCreatePageComponent } from './character-weapon-enhancement-create-page.component';

describe('CharacterWeaponEnhancementCreatePageComponent', () => {
  let component: CharacterWeaponEnhancementCreatePageComponent;
  let fixture: ComponentFixture<CharacterWeaponEnhancementCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterWeaponEnhancementCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterWeaponEnhancementCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
