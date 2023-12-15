import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesEditPageComponent } from './weekly-bosses-edit-page.component';

describe('WeeklyBossesEditPageComponent', () => {
  let component: WeeklyBossesEditPageComponent;
  let fixture: ComponentFixture<WeeklyBossesEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
