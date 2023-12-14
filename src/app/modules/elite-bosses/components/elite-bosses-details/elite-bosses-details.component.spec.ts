import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesDetailsComponent } from './elite-bosses-details.component';

describe('EliteBossesDetailsComponent', () => {
  let component: EliteBossesDetailsComponent;
  let fixture: ComponentFixture<EliteBossesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
