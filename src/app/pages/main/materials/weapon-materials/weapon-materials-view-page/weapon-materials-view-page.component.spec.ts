import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsViewPageComponent } from './weapon-materials-view-page.component';

describe('WeaponMaterialsViewPageComponent', () => {
  let component: WeaponMaterialsViewPageComponent;
  let fixture: ComponentFixture<WeaponMaterialsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
