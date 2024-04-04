import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArtifactLevelingCategoryViewTableComponent
} from "../../../../../modules/artifact-leveling-category/components/artifact-leveling-category-view-table/artifact-leveling-category-view-table.component";

@Component({
  selector: 'clt-artifact-leveling-category-view-page',
  standalone: true,
  imports: [CommonModule, ArtifactLevelingCategoryViewTableComponent],
  templateUrl: './artifact-leveling-category-view-page.component.html',
  styleUrl: './artifact-leveling-category-view-page.component.scss'
})
export class ArtifactLevelingCategoryViewPageComponent {

}
