import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancementMaterialsViewTableComponent } from './enhancement-materials-view-table.component';

describe('EnhancementMaterialsViewTableComponent', () => {
  let component: EnhancementMaterialsViewTableComponent;
  let fixture: ComponentFixture<EnhancementMaterialsViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancementMaterialsViewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnhancementMaterialsViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
