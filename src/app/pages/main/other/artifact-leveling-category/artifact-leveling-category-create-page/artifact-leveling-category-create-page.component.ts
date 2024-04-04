import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AscensionMaterialsCreateComponent
} from "../../../../../modules/ascension-material/components/ascension-materials-create/ascension-materials-create.component";

@Component({
  selector: 'clt-artifact-leveling-category-create-page',
  standalone: true,
  imports: [CommonModule, AscensionMaterialsCreateComponent],
  templateUrl: './artifact-leveling-category-create-page.component.html',
  styleUrl: './artifact-leveling-category-create-page.component.scss'
})
export class ArtifactLevelingCategoryCreatePageComponent {

}
