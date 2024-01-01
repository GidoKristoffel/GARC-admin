import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsDetailsComponent } from './weapon-materials-details.component';

describe('WeaponMaterialsDetailsComponent', () => {
  let component: WeaponMaterialsDetailsComponent;
  let fixture: ComponentFixture<WeaponMaterialsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
