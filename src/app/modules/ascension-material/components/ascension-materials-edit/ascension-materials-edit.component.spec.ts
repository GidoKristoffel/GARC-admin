import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscensionMaterialsEditComponent } from './ascension-materials-edit.component';

describe('AscensionMaterialsEditComponent', () => {
  let component: AscensionMaterialsEditComponent;
  let fixture: ComponentFixture<AscensionMaterialsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AscensionMaterialsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AscensionMaterialsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
