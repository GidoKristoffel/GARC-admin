import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpMaterialsDetailsComponent } from './level-up-materials-details.component';

describe('LevelUpMaterialsDetailsComponent', () => {
  let component: LevelUpMaterialsDetailsComponent;
  let fixture: ComponentFixture<LevelUpMaterialsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelUpMaterialsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelUpMaterialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
