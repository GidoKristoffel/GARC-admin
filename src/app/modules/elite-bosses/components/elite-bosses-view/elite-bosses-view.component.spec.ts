import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesViewComponent } from './elite-bosses-view.component';

describe('EliteBossesViewComponent', () => {
  let component: EliteBossesViewComponent;
  let fixture: ComponentFixture<EliteBossesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
