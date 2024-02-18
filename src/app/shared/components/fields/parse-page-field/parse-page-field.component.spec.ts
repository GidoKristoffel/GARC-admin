import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsePageFieldComponent } from './parse-page-field.component';

describe('ParsePageFieldComponent', () => {
  let component: ParsePageFieldComponent;
  let fixture: ComponentFixture<ParsePageFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParsePageFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParsePageFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
