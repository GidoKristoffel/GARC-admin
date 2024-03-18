import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryDetailsComponent } from './artifact-leveling-category-details.component';

describe('ArtifactLevelingCategoryDetailsComponent', () => {
  let component: ArtifactLevelingCategoryDetailsComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
