import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLevelUpCreatePageComponent } from './character-level-up-create-page.component';

describe('CharacterLevelUpCreatePageComponent', () => {
  let component: CharacterLevelUpCreatePageComponent;
  let fixture: ComponentFixture<CharacterLevelUpCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterLevelUpCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterLevelUpCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
