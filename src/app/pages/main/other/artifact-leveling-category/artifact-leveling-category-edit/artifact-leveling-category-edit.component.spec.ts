import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryEditComponent } from './artifact-leveling-category-edit.component';

describe('ArtifactLevelingCategoryEditComponent', () => {
  let component: ArtifactLevelingCategoryEditComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
