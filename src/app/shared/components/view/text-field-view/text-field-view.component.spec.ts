import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldViewComponent } from './text-field-view.component';

describe('TextFieldViewComponent', () => {
  let component: TextFieldViewComponent;
  let fixture: ComponentFixture<TextFieldViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextFieldViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
