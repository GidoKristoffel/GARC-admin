import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsCreateComponent } from './weapon-materials-create.component';

describe('WeaponMaterialsCreateComponent', () => {
  let component: WeaponMaterialsCreateComponent;
  let fixture: ComponentFixture<WeaponMaterialsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
