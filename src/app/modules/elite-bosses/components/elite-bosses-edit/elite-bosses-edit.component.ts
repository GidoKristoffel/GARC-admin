import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from '../../../../core/classes/shared-edit/shared-edit';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IOption } from '../../../../shared/interfaces/input.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/services/language/language.service';
import { EliteBossesMetadataService } from '../../services/elite-bosses-metadata/elite-bosses-metadata.service';
import { EliteBossesFormService } from '../../services/elite-bosses-form/elite-bosses-form.service';
import { EliteBossesOptionsService } from '../../services/elite-bosses-options/elite-bosses-options.service';
import { EliteBossesService } from '../../services/elite-bosses/elite-bosses.service';
import { IEliteBoss } from '../../interfaces/common.inteface';
import { IEliteBossFormBuilder } from '../../interfaces/form.interface';
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-elite-bosses-edit',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, DropdownFieldComponent, FormsModule, ImageFieldComponent, ScrollClassDirective, TextFieldComponent, TranslateModule, RouterLink, ReactiveFormsModule],
  templateUrl: './elite-bosses-edit.component.html',
  styleUrl: './elite-bosses-edit.component.scss',
})
export class EliteBossesEditComponent
  extends SharedEdit<FormGroup<IEliteBossFormBuilder>>
  implements OnInit
{
  public eliteBossTypeOption: IOption[] = [];

  constructor(
    private eliteBossesMetadataService: EliteBossesMetadataService,
    private eliteBossesFormService: EliteBossesFormService,
    private eliteBossesOptionsService: EliteBossesOptionsService,
    private eliteBossesService: EliteBossesService,
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
    this.initMetadata(this.eliteBossesMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.eliteBossesFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.eliteBossesService.getEliteBossById(
      id,
      (eliteBoss: IEliteBoss): void => {
        this.form.patchValue(
          this.eliteBossesFormService.convertToForm(eliteBoss),
        );
        this.initOptions();
        this.loaded = true;
      },
    );
  }

  private initOptions(): void {
    this.eliteBossTypeOption = this.eliteBossesOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.eliteBossesService.updateEliteBoss(
        this.id,
        this.form,
        this.detailsLink,
        this.route,
      );
    }
  }
}
