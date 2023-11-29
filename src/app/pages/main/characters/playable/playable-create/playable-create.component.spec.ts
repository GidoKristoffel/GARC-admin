import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableCreateComponent } from './playable-create.component';

describe('PlayableCreateComponent', () => {
  let component: PlayableCreateComponent;
  let fixture: ComponentFixture<PlayableCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayableCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
