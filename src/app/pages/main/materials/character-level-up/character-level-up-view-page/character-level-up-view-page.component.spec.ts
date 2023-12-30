import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLevelUpViewPageComponent } from './character-level-up-view-page.component';

describe('CharacterLevelUpViewPageComponent', () => {
  let component: CharacterLevelUpViewPageComponent;
  let fixture: ComponentFixture<CharacterLevelUpViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterLevelUpViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterLevelUpViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
