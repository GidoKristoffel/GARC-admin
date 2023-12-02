import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";
import { IOption } from "../../../../shared/interfaces/input.interface";
import { EQuality } from "../../enums/quality.enum";
import { EElementType } from "../../enums/element-type.enum";
import { ERegion } from "../../enums/region.enum";
import { EBonusAttribute } from "../../enums/bonus-attribute.enum";
import { EWeapon } from "../../enums/weapon.enum";
import { EBtnType } from "../../../../core/enums/btn-type.enum";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { EArche } from "../../enums/arche.enum";
import { DatetimeFieldComponent } from "../../../../shared/components/fields/datetime-field/datetime-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";

@Component({
  selector: 'clt-characters-playable-create',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, DropdownFieldComponent, ReactiveFormsModule, ScrollClassDirective, TextFieldComponent, TranslateModule, CheckboxFieldComponent, DatetimeFieldComponent, ImageFieldComponent],
  templateUrl: './characters-playable-create.component.html',
  styleUrl: './characters-playable-create.component.scss'
})
export class CharactersPlayableCreateComponent implements OnInit {
  public form = this.formBuilder.group({
    nameEn: ['', [Validators.required]],
    nameUa: ['', [Validators.required]],
    nameRu: ['', [Validators.required]],
    quality: ['', [Validators.required]],
    elementalType: ['', [Validators.required]],
    region: ['', [Validators.required]],
    bonusAttribute: ['', [Validators.required]],
    weapon: ['', [Validators.required]],
    constellationEn: ['', [Validators.required]],
    constellationUa: ['', [Validators.required]],
    constellationRu: ['', [Validators.required]],
    arche: [[]],
    birthday: [null, [Validators.required]],
    titleEn: ['', [Validators.required]],
    titleUa: ['', [Validators.required]],
    titleRu: ['', [Validators.required]],
    affiliationEn: ['', [Validators.required]],
    affiliationUa: ['', [Validators.required]],
    affiliationRu: ['', [Validators.required]],
    icon: ['', [Validators.required]],
    splashArt: ['', [Validators.required]],
    cardIcon: ['', [Validators.required]]
  });

  public qualityOptions: IOption[] = [];
  public elementOptions: IOption[] = [];
  public regionOptions: IOption[] = [];
  public bonusAttributeOptions: IOption[] = [];
  public weaponOptions: IOption[] = [];
  public archeOptions: IOption[] = [];

  private readonly translateKey: string = 'page.characters.playable.create.';
  public readonly btnType: EBtnType = EBtnType.Submit;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initOptions();
  }

  private initOptions(): void {
    this.qualityOptions = this.generateOptions<typeof EQuality>(EQuality, 'select.quality');
    this.elementOptions = this.generateOptions<typeof EElementType>(EElementType, 'select.element');
    this.regionOptions = this.generateOptions<typeof ERegion>(ERegion, 'select.region');
    this.bonusAttributeOptions = this.generateOptions<typeof EBonusAttribute>(EBonusAttribute, 'select.bonus-attribute');
    this.weaponOptions = this.generateOptions<typeof EWeapon>(EWeapon, 'select.weapon');
    this.archeOptions = this.generateOptions<typeof EArche>(EArche, 'checkbox.arche');
  }

  private generateOptions<T extends Object>(enumObject: T, translateSubKey: string = ''): IOption[] {
    return Object.values(enumObject).map((value): IOption => {
      return {
        label: this.translateKey + translateSubKey + '.' + value,
        value
      }
    });
  }

  public save(): void {
    console.log('form: ', this.form.value);
  }
}
