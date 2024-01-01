import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsEditComponent } from './weapon-materials-edit.component';

describe('WeaponMaterialsEditComponent', () => {
  let component: WeaponMaterialsEditComponent;
  let fixture: ComponentFixture<WeaponMaterialsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
