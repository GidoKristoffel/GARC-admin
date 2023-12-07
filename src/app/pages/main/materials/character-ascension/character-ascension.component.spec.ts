import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAscensionComponent } from './character-ascension.component';

describe('CharacterAscensionComponent', () => {
  let component: CharacterAscensionComponent;
  let fixture: ComponentFixture<CharacterAscensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAscensionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterAscensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
