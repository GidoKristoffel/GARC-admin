import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IOption } from "../../../../shared/interfaces/input.interface";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ITalentMaterialFormBuilder } from "../../interfaces/form.interface";
import {
  TalentMaterialsMetadataService
} from "../../services/talent-materials-metadata/talent-materials-metadata.service";
import {
  TalentMaterialsOptionsService
} from "../../services/talent-materials-options/talent-materials-options.service";
import { TalentMaterialsFormService } from "../../services/talent-materials-form/talent-materials-form.service";
import { TalentMaterialsService } from "../../services/talent-materials/talent-materials.service";
import { ITalentMaterialsOptions } from "../../interfaces/options.interface";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { DatetimeFieldComponent } from "../../../../shared/components/fields/datetime-field/datetime-field.component";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";
import {
    TableCreateFacadeComponent
} from "../../../../shared/components/facade/table-create-facade/table-create-facade.component";

@Component({
  selector: 'clt-talent-materials-create',
  standalone: true,
    imports: [CommonModule, CheckboxFieldComponent, DatetimeFieldComponent, DefaultBtnComponent, DropdownFieldComponent, ImageFieldComponent, ReactiveFormsModule, ScrollClassDirective, TextFieldComponent, TranslateModule, RouterLink, TableCreateFacadeComponent],
  templateUrl: './talent-materials-create.component.html',
  styleUrl: './talent-materials-create.component.scss'
})
export class TalentMaterialsCreateComponent
  extends SharedCreate<FormGroup<ITalentMaterialFormBuilder>>
  implements OnInit
{
  public options!: ITalentMaterialsOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private talentMaterialsMetadataService: TalentMaterialsMetadataService,
    private talentMaterialsOptionsService: TalentMaterialsOptionsService,
    private talentMaterialsFormService: TalentMaterialsFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private talentMaterialsService: TalentMaterialsService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.talentMaterialsMetadataService.getCreate());
  }

  private initOptions(): void {
    this.options = this.talentMaterialsOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.talentMaterialsFormService.getForm();
  }

  protected initCashing(): void {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data): void => {
        this.formCacheService.saveFormData(data);
      });
  }

  protected loadCachedData(): void {
    const cachedData = this.formCacheService.loadFormData();
    if (cachedData) {
      this.form.patchValue(cachedData);
    }
  }

  public save(): void {
    this.talentMaterialsService.createTalentMaterial(this.form, this.viewLink, this.route);
  }
}
