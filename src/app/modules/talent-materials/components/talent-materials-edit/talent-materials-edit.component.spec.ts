import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentMaterialsEditComponent } from './talent-materials-edit.component';

describe('TalentMaterialsEditComponent', () => {
  let component: TalentMaterialsEditComponent;
  let fixture: ComponentFixture<TalentMaterialsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentMaterialsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentMaterialsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
