import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesCreateComponent } from './weekly-bosses-create.component';

describe('WeeklyBossesCreateComponent', () => {
  let component: WeeklyBossesCreateComponent;
  let fixture: ComponentFixture<WeeklyBossesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
