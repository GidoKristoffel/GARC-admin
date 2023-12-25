import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAscensionCreatePageComponent } from './character-ascension-create-page.component';

describe('CharacterAscensionCreatePageComponent', () => {
  let component: CharacterAscensionCreatePageComponent;
  let fixture: ComponentFixture<CharacterAscensionCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAscensionCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterAscensionCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
