import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableComponent } from './playable.component';

describe('PlayableComponent', () => {
  let component: PlayableComponent;
  let fixture: ComponentFixture<PlayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
