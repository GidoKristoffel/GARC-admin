import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteBossesCreatePageComponent } from './elite-bosses-create-page.component';

describe('EliteBossesCreatePageComponent', () => {
  let component: EliteBossesCreatePageComponent;
  let fixture: ComponentFixture<EliteBossesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliteBossesCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliteBossesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
