import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryCreateComponent } from './artifact-leveling-category-create.component';

describe('ArtifactLevelingCategoryCreateComponent', () => {
  let component: ArtifactLevelingCategoryCreateComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
