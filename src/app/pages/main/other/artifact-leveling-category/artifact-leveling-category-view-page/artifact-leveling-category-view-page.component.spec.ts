import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryViewPageComponent } from './artifact-leveling-category-view-page.component';

describe('ArtifactLevelingCategoryViewPageComponent', () => {
  let component: ArtifactLevelingCategoryViewPageComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
