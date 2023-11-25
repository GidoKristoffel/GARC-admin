import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFabBtnComponent } from './extended-fab-btn.component';

describe('ExtendedFabBtnComponent', () => {
  let component: ExtendedFabBtnComponent;
  let fixture: ComponentFixture<ExtendedFabBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedFabBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtendedFabBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
