import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsViewTableComponent } from './weapons-view-table.component';

describe('WeaponsViewTableComponent', () => {
  let component: WeaponsViewTableComponent;
  let fixture: ComponentFixture<WeaponsViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsViewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponsViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
