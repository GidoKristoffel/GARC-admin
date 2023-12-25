import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewFacadeComponent } from './table-view-facade.component';

describe('TableViewFacadeComponent', () => {
  let component: TableViewFacadeComponent;
  let fixture: ComponentFixture<TableViewFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableViewFacadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableViewFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
