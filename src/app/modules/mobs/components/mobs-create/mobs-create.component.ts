import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from '../../../../core/classes/shared-create/shared-create';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IMobFormBuilder } from '../../interfaces/form.interface';
import { IOption, IOptions } from '../../../../shared/interfaces/input.interface';
import { MobsOptionsService } from "../../services/mobs-options/mobs-options.service";
import { MobsMetadataService } from "../../services/mobs-metadata/mobs-metadata.service";
import { MobsFormService } from "../../services/mobs-form/mobs-form.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { MobsService } from "../../services/mobs/mobs.service";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { DatetimeFieldComponent } from "../../../../shared/components/fields/datetime-field/datetime-field.component";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import {
  TableCreateFacadeComponent
} from "../../../../shared/components/facade/table-create-facade/table-create-facade.component";

@Component({
  selector: 'clt-mobs-create',
  standalone: true,
  imports: [CommonModule, CheckboxFieldComponent, DatetimeFieldComponent, DefaultBtnComponent, DropdownFieldComponent, FormsModule, ImageFieldComponent, ScrollClassDirective, TextFieldComponent, TranslateModule, ReactiveFormsModule, RouterLink, TableCreateFacadeComponent],
  templateUrl: './mobs-create.component.html',
  styleUrl: './mobs-create.component.scss',
})
export class MobsCreateComponent
  extends SharedCreate<FormGroup<IMobFormBuilder>>
  implements OnInit
{
  public options!: IOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private mobsMetadataService: MobsMetadataService,
    private mobsOptionsService: MobsOptionsService,
    private mobsFormService: MobsFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private mobsService: MobsService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.mobsMetadataService.getCreate());
  }

  private initOptions(): void {
    this.options = this.mobsOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.mobsFormService.getForm();
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
    this.mobsService.createMob(this.form, this.viewLink, this.route);
  }
}
