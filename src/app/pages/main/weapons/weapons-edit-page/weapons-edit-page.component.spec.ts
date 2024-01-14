import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsEditPageComponent } from './weapons-edit-page.component';

describe('WeaponsEditPageComponent', () => {
  let component: WeaponsEditPageComponent;
  let fixture: ComponentFixture<WeaponsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
