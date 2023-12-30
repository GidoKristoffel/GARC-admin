import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from "../../../../core/classes/shared-edit/shared-edit";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { ILevelUpMaterialFormBuilder } from "../../interfaces/form.interface";
import { ILevelUpMaterialsOptions } from "../../interfaces/options.interface";
import {
  LevelUpMaterialsMetadataService
} from "../../services/level-up-materials-metadata/level-up-materials-metadata.service";
import { LevelUpMaterialsFormService } from "../../services/level-up-materials-form/level-up-materials-form.service";
import {
  LevelUpMaterialsOptionsService
} from "../../services/level-up-materials-options/level-up-materials-options.service";
import { LevelUpMaterialsService } from "../../services/level-up-materials/level-up-materials.service";
import { ILevelUpMaterial } from "../../interfaces/common.inteface";
import {
  TableEditFacadeComponent
} from "../../../../shared/components/facade/table-edit-facade/table-edit-facade.component";

@Component({
  selector: 'clt-level-up-materials-edit',
  standalone: true,
  imports: [CommonModule, TableEditFacadeComponent],
  templateUrl: './level-up-materials-edit.component.html',
  styleUrl: './level-up-materials-edit.component.scss'
})
export class LevelUpMaterialsEditComponent
  extends SharedEdit<FormGroup<ILevelUpMaterialFormBuilder>>
  implements OnInit
{
  public options!: ILevelUpMaterialsOptions;

  constructor(
    private levelUpMaterialsMetadataService: LevelUpMaterialsMetadataService,
    private levelUpMaterialsFormService: LevelUpMaterialsFormService,
    private levelUpMaterialsOptionsService: LevelUpMaterialsOptionsService,
    private levelUpMaterialsService: LevelUpMaterialsService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initForm();
    this.initMetadata(this.levelUpMaterialsMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.levelUpMaterialsFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.levelUpMaterialsService.getLevelUpMaterialById(id, (levelUpMaterial: ILevelUpMaterial): void => {
      this.form.patchValue(this.levelUpMaterialsFormService.convertToForm(levelUpMaterial));
      this.initOptions();
      this.loaded = true;
    });
  }

  private initOptions(): void {
    this.options = this.levelUpMaterialsOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.levelUpMaterialsService.updateLevelUpMaterial(this.id, this.form, this.detailsLink, this.route);
    }
  }
}
