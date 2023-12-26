import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEditFacadeComponent } from './table-edit-facade.component';

describe('TableEditFacadeComponent', () => {
  let component: TableEditFacadeComponent;
  let fixture: ComponentFixture<TableEditFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEditFacadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableEditFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
