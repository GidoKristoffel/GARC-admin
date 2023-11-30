import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersPlayableCreateComponent } from './characters-playable-create.component';

describe('CharactersPlayableCreateComponent', () => {
  let component: CharactersPlayableCreateComponent;
  let fixture: ComponentFixture<CharactersPlayableCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersPlayableCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersPlayableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
