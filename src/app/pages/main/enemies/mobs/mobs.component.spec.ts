import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsComponent } from './mobs.component';

describe('MobsComponent', () => {
  let component: MobsComponent;
  let fixture: ComponentFixture<MobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
