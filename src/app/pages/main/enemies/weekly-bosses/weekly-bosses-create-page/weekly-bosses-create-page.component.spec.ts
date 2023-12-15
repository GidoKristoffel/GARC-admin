import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBossesCreatePageComponent } from './weekly-bosses-create-page.component';

describe('WeeklyBossesCreatePageComponent', () => {
  let component: WeeklyBossesCreatePageComponent;
  let fixture: ComponentFixture<WeeklyBossesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBossesCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyBossesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
