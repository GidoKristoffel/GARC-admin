import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsDetailsPageComponent } from './weapon-materials-details-page.component';

describe('WeaponMaterialsDetailsPageComponent', () => {
  let component: WeaponMaterialsDetailsPageComponent;
  let fixture: ComponentFixture<WeaponMaterialsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
