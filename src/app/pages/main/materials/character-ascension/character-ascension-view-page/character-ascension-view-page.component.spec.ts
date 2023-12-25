import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAscensionViewPageComponent } from './character-ascension-view-page.component';

describe('CharacterAscensionViewPageComponent', () => {
  let component: CharacterAscensionViewPageComponent;
  let fixture: ComponentFixture<CharacterAscensionViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAscensionViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterAscensionViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
