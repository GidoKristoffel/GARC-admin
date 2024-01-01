import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponMaterialsViewTableComponent } from './weapon-materials-view-table.component';

describe('WeaponMaterialsViewTableComponent', () => {
  let component: WeaponMaterialsViewTableComponent;
  let fixture: ComponentFixture<WeaponMaterialsViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponMaterialsViewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponMaterialsViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
