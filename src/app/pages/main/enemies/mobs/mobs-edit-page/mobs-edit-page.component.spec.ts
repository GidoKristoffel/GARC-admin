import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsEditPageComponent } from './mobs-edit-page.component';

describe('MobsEditPageComponent', () => {
  let component: MobsEditPageComponent;
  let fixture: ComponentFixture<MobsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
