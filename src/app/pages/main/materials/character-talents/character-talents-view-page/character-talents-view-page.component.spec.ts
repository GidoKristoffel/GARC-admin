import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTalentsViewPageComponent } from './character-talents-view-page.component';

describe('CharacterTalentsViewPageComponent', () => {
  let component: CharacterTalentsViewPageComponent;
  let fixture: ComponentFixture<CharacterTalentsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTalentsViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterTalentsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
