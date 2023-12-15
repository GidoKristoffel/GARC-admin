import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesViewPageComponent } from './weekly-bosses-view-page.component';

describe('WeeklyBossesViewPageComponent', () => {
  let component: WeeklyBossesViewPageComponent;
  let fixture: ComponentFixture<WeeklyBossesViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
