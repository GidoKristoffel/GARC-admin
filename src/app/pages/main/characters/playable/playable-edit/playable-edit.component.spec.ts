import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableEditComponent } from './playable-edit.component';

describe('PlayableEditComponent', () => {
  let component: PlayableEditComponent;
  let fixture: ComponentFixture<PlayableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayableEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
