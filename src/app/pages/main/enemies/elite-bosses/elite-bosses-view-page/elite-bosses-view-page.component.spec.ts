import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesViewPageComponent } from './elite-bosses-view-page.component';

describe('EliteBossesViewPageComponent', () => {
  let component: EliteBossesViewPageComponent;
  let fixture: ComponentFixture<EliteBossesViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
