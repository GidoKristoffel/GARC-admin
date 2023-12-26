import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreateFacadeComponent } from './table-create-facade.component';

describe('TableCreateFacadeComponent', () => {
  let component: TableCreateFacadeComponent;
  let fixture: ComponentFixture<TableCreateFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCreateFacadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCreateFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
