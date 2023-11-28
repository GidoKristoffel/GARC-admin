import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesComponent } from './weekly-bosses.component';

describe('WeeklyBossesComponent', () => {
  let component: WeeklyBossesComponent;
  let fixture: ComponentFixture<WeeklyBossesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
