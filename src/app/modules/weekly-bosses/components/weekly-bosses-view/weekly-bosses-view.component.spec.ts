import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesViewComponent } from './weekly-bosses-view.component';

describe('WeeklyBossesViewComponent', () => {
  let component: WeeklyBossesViewComponent;
  let fixture: ComponentFixture<WeeklyBossesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
