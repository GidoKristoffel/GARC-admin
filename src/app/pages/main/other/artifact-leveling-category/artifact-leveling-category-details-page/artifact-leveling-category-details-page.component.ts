import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArtifactLevelingCategoryDetailsComponent
} from "../../../../../modules/artifact-leveling-category/components/artifact-leveling-category-details/artifact-leveling-category-details.component";

@Component({
  selector: 'clt-artifact-leveling-category-details-page',
  standalone: true,
  imports: [CommonModule, ArtifactLevelingCategoryDetailsComponent],
  templateUrl: './artifact-leveling-category-details-page.component.html',
  styleUrl: './artifact-leveling-category-details-page.component.scss'
})
export class ArtifactLevelingCategoryDetailsPageComponent {

}
