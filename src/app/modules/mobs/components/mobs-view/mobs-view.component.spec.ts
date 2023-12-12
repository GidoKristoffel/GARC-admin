import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsViewComponent } from './mobs-view.component';

describe('MobsViewComponent', () => {
  let component: MobsViewComponent;
  let fixture: ComponentFixture<MobsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
