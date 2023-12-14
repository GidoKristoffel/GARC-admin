import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesEditPageComponent } from './elite-bosses-edit-page.component';

describe('EliteBossesEditPageComponent', () => {
  let component: EliteBossesEditPageComponent;
  let fixture: ComponentFixture<EliteBossesEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
