import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsDetailsComponent } from './mobs-details.component';

describe('MobsDetailsComponent', () => {
  let component: MobsDetailsComponent;
  let fixture: ComponentFixture<MobsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
