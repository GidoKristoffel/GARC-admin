import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IOption } from "../../../../shared/interfaces/input.interface";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { WeeklyBossesMetadataService } from "../../services/weekly-bosses-metadata/weekly-bosses-metadata.service";
import { WeeklyBossesOptionsService } from "../../services/weekly-bosses-options/weekly-bosses-options.service";
import { WeeklyBossesFormService } from "../../services/weekly-bosses-form/weekly-bosses-form.service";
import { WeeklyBossesService } from "../../services/weekly-bosses/weekly-bosses.service";
import { IWeeklyBossFormBuilder } from "../../interfaces/form.interface";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { DatetimeFieldComponent } from "../../../../shared/components/fields/datetime-field/datetime-field.component";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-weekly-bosses-create',
  standalone: true,
  imports: [CommonModule, CheckboxFieldComponent, DatetimeFieldComponent, DefaultBtnComponent, DropdownFieldComponent, ImageFieldComponent, ReactiveFormsModule, ScrollClassDirective, TextFieldComponent, TranslateModule, RouterLink],
  templateUrl: './weekly-bosses-create.component.html',
  styleUrl: './weekly-bosses-create.component.scss'
})
export class WeeklyBossesCreateComponent
  extends SharedCreate<FormGroup<IWeeklyBossFormBuilder>>
  implements OnInit
{
  public weeklyBossTypeOption: IOption[] = [];

  constructor(
    protected override formBuilder: FormBuilder,
    private weeklyBossesMetadataService: WeeklyBossesMetadataService,
    private weeklyBossesOptionsService: WeeklyBossesOptionsService,
    private weeklyBossesFormService: WeeklyBossesFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private weeklyBossesService: WeeklyBossesService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.weeklyBossesMetadataService.getCreate());
  }

  private initOptions(): void {
    this.weeklyBossTypeOption = this.weeklyBossesOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.weeklyBossesFormService.getForm();
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
    this.weeklyBossesService.createWeeklyBoss(
      this.form,
      this.viewLink,
      this.route,
    );
  }
}
