import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableViewComponent } from './playable-view.component';

describe('PlayableViewComponent', () => {
  let component: PlayableViewComponent;
  let fixture: ComponentFixture<PlayableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
