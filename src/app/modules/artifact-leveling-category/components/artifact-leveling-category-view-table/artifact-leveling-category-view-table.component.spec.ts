import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryViewTableComponent } from './artifact-leveling-category-view-table.component';

describe('ArtifactLevelingCategoryViewTableComponent', () => {
  let component: ArtifactLevelingCategoryViewTableComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryViewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
