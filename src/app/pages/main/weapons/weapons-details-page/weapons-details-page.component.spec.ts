import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsDetailsPageComponent } from './weapons-details-page.component';

describe('WeaponsDetailsPageComponent', () => {
  let component: WeaponsDetailsPageComponent;
  let fixture: ComponentFixture<WeaponsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
