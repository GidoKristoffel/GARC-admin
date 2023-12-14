import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesEditComponent } from './elite-bosses-edit.component';

describe('EliteBossesEditComponent', () => {
  let component: EliteBossesEditComponent;
  let fixture: ComponentFixture<EliteBossesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
