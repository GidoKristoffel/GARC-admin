import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAscensionEditPageComponent } from './character-ascension-edit-page.component';

describe('CharacterAscensionEditPageComponent', () => {
  let component: CharacterAscensionEditPageComponent;
  let fixture: ComponentFixture<CharacterAscensionEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAscensionEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterAscensionEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
