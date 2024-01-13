import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsCreateComponent } from './weapons-create.component';

describe('WeaponsCreateComponent', () => {
  let component: WeaponsCreateComponent;
  let fixture: ComponentFixture<WeaponsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
