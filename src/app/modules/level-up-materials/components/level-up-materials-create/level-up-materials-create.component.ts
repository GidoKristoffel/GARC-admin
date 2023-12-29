import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ILevelUpMaterialFormBuilder } from "../../interfaces/form.interface";
import { ILevelUpMaterialsOptions } from "../../interfaces/options.interface";
import {
  LevelUpMaterialsMetadataService
} from "../../services/level-up-materials-metadata/level-up-materials-metadata.service";
import {
  LevelUpMaterialsOptionsService
} from "../../services/level-up-materials-options/level-up-materials-options.service";
import { LevelUpMaterialsFormService } from "../../services/level-up-materials-form/level-up-materials-form.service";
import { LevelUpMaterialsService } from "../../services/level-up-materials/level-up-materials.service";
import {
  TableCreateFacadeComponent
} from "../../../../shared/components/facade/table-create-facade/table-create-facade.component";

@Component({
  selector: 'clt-level-up-materials-create',
  standalone: true,
  imports: [CommonModule, TableCreateFacadeComponent],
  templateUrl: './level-up-materials-create.component.html',
  styleUrl: './level-up-materials-create.component.scss'
})
export class LevelUpMaterialsCreateComponent
  extends SharedCreate<FormGroup<ILevelUpMaterialFormBuilder>>
  implements OnInit
{
  public options!: ILevelUpMaterialsOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private levelUpMaterialsMetadataService: LevelUpMaterialsMetadataService,
    private levelUpMaterialsOptionsService: LevelUpMaterialsOptionsService,
    private levelUpMaterialsFormService: LevelUpMaterialsFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private levelUpMaterialsService: LevelUpMaterialsService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.levelUpMaterialsMetadataService.getCreate());
  }

  private initOptions(): void {
    this.options = this.levelUpMaterialsOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.levelUpMaterialsFormService.getForm();
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
    this.levelUpMaterialsService.createLevelUpMaterial(this.form, this.viewLink, this.route);
  }
}
