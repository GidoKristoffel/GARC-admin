import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTalentsEditPageComponent } from './character-talents-edit-page.component';

describe('CharacterTalentsEditPageComponent', () => {
  let component: CharacterTalentsEditPageComponent;
  let fixture: ComponentFixture<CharacterTalentsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTalentsEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterTalentsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
