import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AscensionMaterialsCreateComponent
} from "../../../../../modules/ascension-material/components/ascension-materials-create/ascension-materials-create.component";
import {
  ArtifactLevelingCategoryCreateComponent
} from "../../../../../modules/artifact-leveling-category/components/artifact-leveling-category-create/artifact-leveling-category-create.component";

@Component({
  selector: 'clt-artifact-leveling-category-create-page',
  standalone: true,
  imports: [CommonModule, AscensionMaterialsCreateComponent, ArtifactLevelingCategoryCreateComponent],
  templateUrl: './artifact-leveling-category-create-page.component.html',
  styleUrl: './artifact-leveling-category-create-page.component.scss'
})
export class ArtifactLevelingCategoryCreatePageComponent {

}
