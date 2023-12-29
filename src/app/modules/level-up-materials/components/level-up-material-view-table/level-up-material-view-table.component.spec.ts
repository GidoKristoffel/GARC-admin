import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpMaterialViewTableComponent } from './level-up-material-view-table.component';

describe('LevelUpMaterialViewTableComponent', () => {
  let component: LevelUpMaterialViewTableComponent;
  let fixture: ComponentFixture<LevelUpMaterialViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelUpMaterialViewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelUpMaterialViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
