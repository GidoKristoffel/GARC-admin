import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLevelUpDetailsPageComponent } from './character-level-up-details-page.component';

describe('CharacterLevelUpDetailsPageComponent', () => {
  let component: CharacterLevelUpDetailsPageComponent;
  let fixture: ComponentFixture<CharacterLevelUpDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterLevelUpDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterLevelUpDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
