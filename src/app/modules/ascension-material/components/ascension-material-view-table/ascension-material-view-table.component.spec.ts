import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscensionMaterialViewTableComponent } from './ascension-material-view-table.component';

describe('AscensionMaterialViewTableComponent', () => {
  let component: AscensionMaterialViewTableComponent;
  let fixture: ComponentFixture<AscensionMaterialViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AscensionMaterialViewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AscensionMaterialViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
