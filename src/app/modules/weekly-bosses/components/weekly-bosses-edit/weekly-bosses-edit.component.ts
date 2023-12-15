import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from '../../../../core/classes/shared-edit/shared-edit';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IOption } from '../../../../shared/interfaces/input.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/services/language/language.service';
import { IWeeklyBossFormBuilder } from '../../interfaces/form.interface';
import { WeeklyBossesMetadataService } from '../../services/weekly-bosses-metadata/weekly-bosses-metadata.service';
import { WeeklyBossesFormService } from '../../services/weekly-bosses-form/weekly-bosses-form.service';
import { WeeklyBossesOptionsService } from '../../services/weekly-bosses-options/weekly-bosses-options.service';
import { WeeklyBossesService } from '../../services/weekly-bosses/weekly-bosses.service';
import { IWeeklyBoss } from '../../interfaces/common.inteface';
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-weekly-bosses-edit',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, DropdownFieldComponent, ImageFieldComponent, ReactiveFormsModule, ScrollClassDirective, TextFieldComponent, TranslateModule, RouterLink],
  templateUrl: './weekly-bosses-edit.component.html',
  styleUrl: './weekly-bosses-edit.component.scss',
})
export class WeeklyBossesEditComponent
  extends SharedEdit<FormGroup<IWeeklyBossFormBuilder>>
  implements OnInit
{
  public weeklyBossTypeOption: IOption[] = [];

  constructor(
    private weeklyBossesMetadataService: WeeklyBossesMetadataService,
    private weeklyBossesFormService: WeeklyBossesFormService,
    private weeklyBossesOptionsService: WeeklyBossesOptionsService,
    private weeklyBossesService: WeeklyBossesService,
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
    this.initMetadata(this.weeklyBossesMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.weeklyBossesFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.weeklyBossesService.getWeeklyBossById(
      id,
      (weeklyBoss: IWeeklyBoss): void => {
        this.form.patchValue(
          this.weeklyBossesFormService.convertToForm(weeklyBoss),
        );
        this.initOptions();
        this.loaded = true;
      },
    );
  }

  private initOptions(): void {
    this.weeklyBossTypeOption = this.weeklyBossesOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.weeklyBossesService.updateWeeklyBoss(
        this.id,
        this.form,
        this.detailsLink,
        this.route,
      );
    }
  }
}
