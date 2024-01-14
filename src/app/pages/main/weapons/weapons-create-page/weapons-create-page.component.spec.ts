import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsCreatePageComponent } from './weapons-create-page.component';

describe('WeaponsCreatePageComponent', () => {
  let component: WeaponsCreatePageComponent;
  let fixture: ComponentFixture<WeaponsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
