import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsCreatePageComponent } from './weapon-materials-create-page.component';

describe('WeaponMaterialsCreatePageComponent', () => {
  let component: WeaponMaterialsCreatePageComponent;
  let fixture: ComponentFixture<WeaponMaterialsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
