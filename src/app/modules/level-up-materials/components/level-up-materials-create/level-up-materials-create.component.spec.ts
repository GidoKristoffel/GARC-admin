import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpMaterialsCreateComponent } from './level-up-materials-create.component';

describe('LevelUpMaterialsCreateComponent', () => {
  let component: LevelUpMaterialsCreateComponent;
  let fixture: ComponentFixture<LevelUpMaterialsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelUpMaterialsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelUpMaterialsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
