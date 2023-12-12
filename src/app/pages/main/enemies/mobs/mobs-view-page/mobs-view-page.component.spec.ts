import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsViewPageComponent } from './mobs-view-page.component';

describe('MobsViewPageComponent', () => {
  let component: MobsViewPageComponent;
  let fixture: ComponentFixture<MobsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
