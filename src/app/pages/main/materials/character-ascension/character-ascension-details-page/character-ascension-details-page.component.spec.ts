import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAscensionDetailsPageComponent } from './character-ascension-details-page.component';

describe('CharacterAscensionDetailsPageComponent', () => {
  let component: CharacterAscensionDetailsPageComponent;
  let fixture: ComponentFixture<CharacterAscensionDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAscensionDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterAscensionDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
