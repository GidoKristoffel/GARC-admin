import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLevelUpEditPageComponent } from './character-level-up-edit-page.component';

describe('CharacterLevelUpEditPageComponent', () => {
  let component: CharacterLevelUpEditPageComponent;
  let fixture: ComponentFixture<CharacterLevelUpEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterLevelUpEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterLevelUpEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
