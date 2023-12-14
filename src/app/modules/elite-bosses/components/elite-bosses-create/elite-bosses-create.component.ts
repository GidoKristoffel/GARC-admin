import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from '../../../../core/classes/shared-create/shared-create';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IOption } from '../../../../shared/interfaces/input.interface';
import { FormCacheService } from '../../../../core/services/form-cache/form-cache.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IEliteBossFormBuilder } from '../../interfaces/form.interface';
import { EliteBossesMetadataService } from '../../services/elite-bosses-metadata/elite-bosses-metadata.service';
import { EliteBossesOptionsService } from '../../services/elite-bosses-options/elite-bosses-options.service';
import { EliteBossesFormService } from '../../services/elite-bosses-form/elite-bosses-form.service';
import { EliteBossesService } from '../../services/elite-bosses/elite-bosses.service';
import { CheckboxFieldComponent } from '../../../../shared/components/fields/checkbox-field/checkbox-field.component';
import { DatetimeFieldComponent } from '../../../../shared/components/fields/datetime-field/datetime-field.component';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { DropdownFieldComponent } from '../../../../shared/components/fields/dropdown-field/dropdown-field.component';
import { ImageFieldComponent } from '../../../../shared/components/fields/image-field/image-field.component';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { TextFieldComponent } from '../../../../shared/components/fields/text-field/text-field.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'clt-elite-bosses-create',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxFieldComponent,
    DatetimeFieldComponent,
    DefaultBtnComponent,
    DropdownFieldComponent,
    FormsModule,
    ImageFieldComponent,
    ScrollClassDirective,
    TextFieldComponent,
    TranslateModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './elite-bosses-create.component.html',
  styleUrl: './elite-bosses-create.component.scss',
})
export class EliteBossesCreateComponent
  extends SharedCreate<FormGroup<IEliteBossFormBuilder>>
  implements OnInit
{
  public eliteBossTypeOption: IOption[] = [];

  constructor(
    protected override formBuilder: FormBuilder,
    private eliteBossesMetadataService: EliteBossesMetadataService,
    private eliteBossesOptionsService: EliteBossesOptionsService,
    private eliteBossesFormService: EliteBossesFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private eliteBossesService: EliteBossesService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.eliteBossesMetadataService.getCreate());
  }

  private initOptions(): void {
    this.eliteBossTypeOption = this.eliteBossesOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.eliteBossesFormService.getForm();
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
    this.eliteBossesService.createEliteBoss(
      this.form,
      this.viewLink,
      this.route,
    );
  }
}
