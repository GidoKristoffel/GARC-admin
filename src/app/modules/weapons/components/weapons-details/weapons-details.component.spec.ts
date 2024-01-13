import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsDetailsComponent } from './weapons-details.component';

describe('WeaponsDetailsComponent', () => {
  let component: WeaponsDetailsComponent;
  let fixture: ComponentFixture<WeaponsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
