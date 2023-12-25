import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscensionMaterialsCreateComponent } from './ascension-materials-create.component';

describe('AscensionMaterialsCreateComponent', () => {
  let component: AscensionMaterialsCreateComponent;
  let fixture: ComponentFixture<AscensionMaterialsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AscensionMaterialsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AscensionMaterialsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
