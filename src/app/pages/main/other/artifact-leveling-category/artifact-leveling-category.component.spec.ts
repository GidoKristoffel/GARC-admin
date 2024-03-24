import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactLevelingCategoryComponent } from './artifact-leveling-category.component';

describe('ArtifactLevelingCategoryComponent', () => {
  let component: ArtifactLevelingCategoryComponent;
  let fixture: ComponentFixture<ArtifactLevelingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactLevelingCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactLevelingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
