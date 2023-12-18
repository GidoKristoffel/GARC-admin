import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentMaterialsViewTableComponent } from './talent-materials-view-table.component';

describe('TalentMaterialsViewTableComponent', () => {
  let component: TalentMaterialsViewTableComponent;
  let fixture: ComponentFixture<TalentMaterialsViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentMaterialsViewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentMaterialsViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
