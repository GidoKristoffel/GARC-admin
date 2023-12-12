import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from '../../../../core/classes/shared-create/shared-create';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IMobFormBuilder } from '../../interfaces/form.interface';
import { IOption } from '../../../../shared/interfaces/input.interface';
import { IPlayableCharacter } from "../../../characters/interfaces/table.interface";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { SharedEdit } from "../../../../core/classes/shared-edit/shared-edit";
import { MobsMetadataService } from "../../services/mobs-metadata/mobs-metadata.service";
import { MobsFormService } from "../../services/mobs-form/mobs-form.service";
import { MobsOptionsService } from "../../services/mobs-options/mobs-options.service";
import { MobsService } from "../../services/mobs/mobs.service";
import { IMob } from "../../interfaces/common.inteface";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { DatetimeFieldComponent } from "../../../../shared/components/fields/datetime-field/datetime-field.component";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-mobs-edit',
  standalone: true,
  imports: [CommonModule, CheckboxFieldComponent, DatetimeFieldComponent, DefaultBtnComponent, DropdownFieldComponent, FormsModule, ImageFieldComponent, ScrollClassDirective, TextFieldComponent, TranslateModule, RouterLink, ReactiveFormsModule],
  templateUrl: './mobs-edit.component.html',
  styleUrl: './mobs-edit.component.scss',
})
export class MobsEditComponent
  extends SharedEdit<FormGroup<IMobFormBuilder>>
  implements OnInit
{
  public mobTypeOption: IOption[] = [];

  constructor(
    private mobsMetadataService: MobsMetadataService,
    private mobsFormService: MobsFormService,
    private mobsOptionsService: MobsOptionsService,
    private mobsService: MobsService,
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
    this.initMetadata(this.mobsMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.mobsFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.mobsService.getMobById(id, (mob: IMob): void => {
      this.form.patchValue(this.mobsFormService.convertToForm(mob));
      this.initOptions();
      this.loaded = true;
    });
  }

  private initOptions(): void {
    this.mobTypeOption = this.mobsOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.mobsService.updateMob(this.id, this.form, this.detailsLink, this.route);
    }
  }
}
