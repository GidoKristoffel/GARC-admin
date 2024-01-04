import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancementMaterialsCreateComponent } from './enhancement-materials-create.component';

describe('EnhancementMaterialsCreateComponent', () => {
  let component: EnhancementMaterialsCreateComponent;
  let fixture: ComponentFixture<EnhancementMaterialsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancementMaterialsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnhancementMaterialsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
