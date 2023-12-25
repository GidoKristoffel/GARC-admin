import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscensionMaterialsDetailsComponent } from './ascension-materials-details.component';

describe('AscensionMaterialsDetailsComponent', () => {
  let component: AscensionMaterialsDetailsComponent;
  let fixture: ComponentFixture<AscensionMaterialsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AscensionMaterialsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AscensionMaterialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
