import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IEnhancementMaterialFormBuilder } from "../../interfaces/form.interface";
import { IEnhancementMaterialsOptions } from "../../interfaces/options.interface";
import {
  EnhancementMaterialsMetadataService
} from "../../services/enhancement-materials-metadata/enhancement-materials-metadata.service";
import {
  EnhancementMaterialsOptionsService
} from "../../services/enhancement-materials-options/enhancement-materials-options.service";
import {
  EnhancementMaterialsFormService
} from "../../services/enhancement-materials-form/enhancement-materials-form.service";
import { EnhancementMaterialsService } from "../../services/enhancement-materials/enhancement-materials.service";
import {
  TableCreateFacadeComponent
} from "../../../../shared/components/facade/table-create-facade/table-create-facade.component";

@Component({
  selector: 'clt-enhancement-materials-create',
  standalone: true,
  imports: [CommonModule, TableCreateFacadeComponent],
  templateUrl: './enhancement-materials-create.component.html',
  styleUrl: './enhancement-materials-create.component.scss'
})
export class EnhancementMaterialsCreateComponent
  extends SharedCreate<FormGroup<IEnhancementMaterialFormBuilder>>
  implements OnInit
{
  public options!: IEnhancementMaterialsOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private enhancementMaterialsMetadataService: EnhancementMaterialsMetadataService,
    private enhancementMaterialsOptionsService: EnhancementMaterialsOptionsService,
    private enhancementMaterialsFormService: EnhancementMaterialsFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private enhancementMaterialsService: EnhancementMaterialsService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.enhancementMaterialsMetadataService.getCreate());
  }

  private initOptions(): void {
    this.options = this.enhancementMaterialsOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.enhancementMaterialsFormService.getForm();
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
    this.enhancementMaterialsService.createEnhancementMaterial(this.form, this.viewLink, this.route);
  }
}
