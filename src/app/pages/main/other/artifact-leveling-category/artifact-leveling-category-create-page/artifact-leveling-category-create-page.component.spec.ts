import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryCreatePageComponent } from './artifact-leveling-category-create-page.component';

describe('ArtifactLevelingCategoryCreatePageComponent', () => {
  let component: ArtifactLevelingCategoryCreatePageComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
