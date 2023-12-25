import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailsFacadeComponent } from './table-details-facade.component';

describe('TableDetailsFacadeComponent', () => {
  let component: TableDetailsFacadeComponent;
  let fixture: ComponentFixture<TableDetailsFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDetailsFacadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDetailsFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
