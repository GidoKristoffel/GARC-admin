import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArtifactLevelingCategoryEditComponent
} from "../../../../../modules/artifact-leveling-category/components/artifact-leveling-category-edit/artifact-leveling-category-edit.component";

@Component({
  selector: 'clt-artifact-leveling-category-edit-page',
  standalone: true,
  imports: [CommonModule, ArtifactLevelingCategoryEditComponent],
  templateUrl: './artifact-leveling-category-edit-page.component.html',
  styleUrl: './artifact-leveling-category-edit-page.component.scss'
})
export class ArtifactLevelingCategoryEditPageComponent {

}
