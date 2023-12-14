import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesCreateComponent } from './elite-bosses-create.component';

describe('EliteBossesCreateComponent', () => {
  let component: EliteBossesCreateComponent;
  let fixture: ComponentFixture<EliteBossesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
