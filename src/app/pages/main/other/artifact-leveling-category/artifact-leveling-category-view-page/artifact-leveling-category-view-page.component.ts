import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArtifactLevelingCategoryEditComponent
} from "../artifact-leveling-category-edit/artifact-leveling-category-edit.component";

@Component({
  selector: 'clt-artifact-leveling-category-view-page',
  standalone: true,
  imports: [CommonModule, ArtifactLevelingCategoryEditComponent],
  templateUrl: './artifact-leveling-category-view-page.component.html',
  styleUrl: './artifact-leveling-category-view-page.component.scss'
})
export class ArtifactLevelingCategoryViewPageComponent {

}
