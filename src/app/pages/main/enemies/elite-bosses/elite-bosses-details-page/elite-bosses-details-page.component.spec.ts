import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesDetailsPageComponent } from './elite-bosses-details-page.component';

describe('EliteBossesDetailsPageComponent', () => {
  let component: EliteBossesDetailsPageComponent;
  let fixture: ComponentFixture<EliteBossesDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
