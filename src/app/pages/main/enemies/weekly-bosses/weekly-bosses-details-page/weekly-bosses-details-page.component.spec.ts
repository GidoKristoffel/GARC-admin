import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesDetailsPageComponent } from './weekly-bosses-details-page.component';

describe('WeeklyBossesDetailsPageComponent', () => {
  let component: WeeklyBossesDetailsPageComponent;
  let fixture: ComponentFixture<WeeklyBossesDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
