import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsCreatePageComponent } from './mobs-create-page.component';

describe('MobsCreatePageComponent', () => {
  let component: MobsCreatePageComponent;
  let fixture: ComponentFixture<MobsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobsCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
