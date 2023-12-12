import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsCreateComponent } from './mobs-create.component';

describe('MobsCreateComponent', () => {
  let component: MobsCreateComponent;
  let fixture: ComponentFixture<MobsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
