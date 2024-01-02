import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsEditPageComponent } from './weapon-materials-edit-page.component';

describe('WeaponMaterialsEditPageComponent', () => {
  let component: WeaponMaterialsEditPageComponent;
  let fixture: ComponentFixture<WeaponMaterialsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
