import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentMaterialsCreateComponent } from './talent-materials-create.component';

describe('TalentMaterialsCreateComponent', () => {
  let component: TalentMaterialsCreateComponent;
  let fixture: ComponentFixture<TalentMaterialsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentMaterialsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentMaterialsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
