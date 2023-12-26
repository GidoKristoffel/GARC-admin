import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IAscensionMaterialFormBuilder } from "../../interfaces/form.interface";
import { IAscensionMaterialsOptions } from "../../interfaces/options.interface";
import {
  AscensionMaterialsMetadataService
} from "../../services/ascension-materials-metadata/ascension-materials-metadata.service";
import {
  AscensionMaterialsOptionsService
} from "../../services/ascension-materials-options/ascension-materials-options.service";
import {
  AscensionMaterialsFormService
} from "../../services/ascension-materials-form/ascension-materials-form.service";
import { AscensionMaterialsService } from "../../services/ascension-materials/ascension-materials.service";
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
  selector: 'clt-ascension-materials-create',
  standalone: true,
    imports: [CommonModule, CheckboxFieldComponent, DatetimeFieldComponent, DefaultBtnComponent, DropdownFieldComponent, ImageFieldComponent, ReactiveFormsModule, ScrollClassDirective, TextFieldComponent, TranslateModule, RouterLink, TableCreateFacadeComponent],
  templateUrl: './ascension-materials-create.component.html',
  styleUrl: './ascension-materials-create.component.scss'
})
export class AscensionMaterialsCreateComponent
  extends SharedCreate<FormGroup<IAscensionMaterialFormBuilder>>
  implements OnInit
{
  public options!: IAscensionMaterialsOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private ascensionMaterialsMetadataService: AscensionMaterialsMetadataService,
    private ascensionMaterialsOptionsService: AscensionMaterialsOptionsService,
    private ascensionMaterialsFormService: AscensionMaterialsFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private ascensionMaterialsService: AscensionMaterialsService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.ascensionMaterialsMetadataService.getCreate());
  }

  private initOptions(): void {
    this.options = this.ascensionMaterialsOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.ascensionMaterialsFormService.getForm();
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
    this.ascensionMaterialsService.createAscensionMaterial(this.form, this.viewLink, this.route);
  }
}
