import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancementMaterialsEditComponent } from './enhancement-materials-edit.component';

describe('EnhancementMaterialsEditComponent', () => {
  let component: EnhancementMaterialsEditComponent;
  let fixture: ComponentFixture<EnhancementMaterialsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancementMaterialsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnhancementMaterialsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
