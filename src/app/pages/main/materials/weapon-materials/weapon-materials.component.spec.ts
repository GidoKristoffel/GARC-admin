import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsComponent } from './weapon-materials.component';

describe('WeaponMaterialsComponent', () => {
  let component: WeaponMaterialsComponent;
  let fixture: ComponentFixture<WeaponMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
