import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryEditPageComponent } from './artifact-leveling-category-edit-page.component';

describe('ArtifactLevelingCategoryEditPageComponent', () => {
  let component: ArtifactLevelingCategoryEditPageComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
