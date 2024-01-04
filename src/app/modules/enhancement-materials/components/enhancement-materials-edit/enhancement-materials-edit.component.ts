import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from "../../../../core/classes/shared-edit/shared-edit";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { IEnhancementMaterialFormBuilder } from "../../interfaces/form.interface";
import { IEnhancementMaterialsOptions } from "../../interfaces/options.interface";
import {
  EnhancementMaterialsMetadataService
} from "../../services/enhancement-materials-metadata/enhancement-materials-metadata.service";
import {
  EnhancementMaterialsFormService
} from "../../services/enhancement-materials-form/enhancement-materials-form.service";
import {
  EnhancementMaterialsOptionsService
} from "../../services/enhancement-materials-options/enhancement-materials-options.service";
import { EnhancementMaterialsService } from "../../services/enhancement-materials/enhancement-materials.service";
import { IEnhancementMaterial } from "../../interfaces/common.inteface";
import {
  TableEditFacadeComponent
} from "../../../../shared/components/facade/table-edit-facade/table-edit-facade.component";

@Component({
  selector: 'clt-enhancement-materials-edit',
  standalone: true,
  imports: [CommonModule, TableEditFacadeComponent],
  templateUrl: './enhancement-materials-edit.component.html',
  styleUrl: './enhancement-materials-edit.component.scss'
})
export class EnhancementMaterialsEditComponent
  extends SharedEdit<FormGroup<IEnhancementMaterialFormBuilder>>
  implements OnInit
{
  public options!: IEnhancementMaterialsOptions;

  constructor(
    private enhancementMaterialsMetadataService: EnhancementMaterialsMetadataService,
    private enhancementMaterialsFormService: EnhancementMaterialsFormService,
    private enhancementMaterialsOptionsService: EnhancementMaterialsOptionsService,
    private enhancementMaterialsService: EnhancementMaterialsService,
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
    this.initMetadata(this.enhancementMaterialsMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.enhancementMaterialsFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.enhancementMaterialsService.getEnhancementMaterialById(id, (enhancementMaterial: IEnhancementMaterial): void => {
      this.form.patchValue(this.enhancementMaterialsFormService.convertToForm(enhancementMaterial));
      this.initOptions();
      this.loaded = true;
    });
  }

  private initOptions(): void {
    this.options = this.enhancementMaterialsOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.enhancementMaterialsService.updateEnhancementMaterial(this.id, this.form, this.detailsLink, this.route);
    }
  }
}
