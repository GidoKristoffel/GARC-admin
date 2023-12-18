import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentMaterialsDetailsComponent } from './talent-materials-details.component';

describe('TalentMaterialsDetailsComponent', () => {
  let component: TalentMaterialsDetailsComponent;
  let fixture: ComponentFixture<TalentMaterialsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentMaterialsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentMaterialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
