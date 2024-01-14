import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsViewTablePageComponent } from './weapons-view-table-page.component';

describe('WeaponsViewTablePageComponent', () => {
  let component: WeaponsViewTablePageComponent;
  let fixture: ComponentFixture<WeaponsViewTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsViewTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponsViewTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
