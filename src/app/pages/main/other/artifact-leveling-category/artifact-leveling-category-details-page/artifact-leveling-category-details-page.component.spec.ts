import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryDetailsPageComponent } from './artifact-leveling-category-details-page.component';

describe('ArtifactLevelingCategoryDetailsPageComponent', () => {
  let component: ArtifactLevelingCategoryDetailsPageComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
