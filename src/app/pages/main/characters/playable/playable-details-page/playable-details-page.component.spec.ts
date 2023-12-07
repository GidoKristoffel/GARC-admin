import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableDetailsPageComponent } from './playable-details-page.component';

describe('PlayableDetailsPageComponent', () => {
  let component: PlayableDetailsPageComponent;
  let fixture: ComponentFixture<PlayableDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayableDetailsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayableDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
