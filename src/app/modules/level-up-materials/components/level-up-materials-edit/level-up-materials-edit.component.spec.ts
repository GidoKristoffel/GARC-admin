import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpMaterialsEditComponent } from './level-up-materials-edit.component';

describe('LevelUpMaterialsEditComponent', () => {
  let component: LevelUpMaterialsEditComponent;
  let fixture: ComponentFixture<LevelUpMaterialsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelUpMaterialsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelUpMaterialsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
