import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesDetailsComponent } from './weekly-bosses-details.component';

describe('WeeklyBossesDetailsComponent', () => {
  let component: WeeklyBossesDetailsComponent;
  let fixture: ComponentFixture<WeeklyBossesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
