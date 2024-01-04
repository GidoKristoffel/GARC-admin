import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancementMaterialsDetailsComponent } from './enhancement-materials-details.component';

describe('EnhancementMaterialsDetailsComponent', () => {
  let component: EnhancementMaterialsDetailsComponent;
  let fixture: ComponentFixture<EnhancementMaterialsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancementMaterialsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnhancementMaterialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
