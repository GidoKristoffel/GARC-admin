import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsDetailsPageComponent } from './mobs-details-page.component';

describe('MobsDetailsPageComponent', () => {
  let component: MobsDetailsPageComponent;
  let fixture: ComponentFixture<MobsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
