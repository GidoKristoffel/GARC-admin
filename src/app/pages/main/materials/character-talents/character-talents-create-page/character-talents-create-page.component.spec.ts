import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTalentsCreatePageComponent } from './character-talents-create-page.component';

describe('CharacterTalentsCreatePageComponent', () => {
  let component: CharacterTalentsCreatePageComponent;
  let fixture: ComponentFixture<CharacterTalentsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTalentsCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterTalentsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
