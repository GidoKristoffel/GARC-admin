import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsEditComponent } from './mobs-edit.component';

describe('MobsEditComponent', () => {
  let component: MobsEditComponent;
  let fixture: ComponentFixture<MobsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
