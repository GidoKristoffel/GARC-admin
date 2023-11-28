import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesComponent } from './elite-bosses.component';

describe('EliteBossesComponent', () => {
  let component: EliteBossesComponent;
  let fixture: ComponentFixture<EliteBossesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
