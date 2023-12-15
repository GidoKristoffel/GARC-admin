import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesEditComponent } from './weekly-bosses-edit.component';

describe('WeeklyBossesEditComponent', () => {
  let component: WeeklyBossesEditComponent;
  let fixture: ComponentFixture<WeeklyBossesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
