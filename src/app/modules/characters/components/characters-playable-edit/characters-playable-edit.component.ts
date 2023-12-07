import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { EPage } from "../../../../core/enums/page.enum";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { DatetimeFieldComponent } from "../../../../shared/components/fields/datetime-field/datetime-field.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { EQuality } from "../../enums/quality.enum";
import { EElementType } from "../../enums/element-type.enum";
import { ERegion } from "../../enums/region.enum";
import { EBonusAttribute } from "../../enums/bonus-attribute.enum";
import { EWeapon } from "../../enums/weapon.enum";
import { EArche } from "../../enums/arche.enum";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { IOption } from "../../../../shared/interfaces/input.interface";
import { CharactersApiService } from "../../api/characters.api.service";
import { convertToUpperDashFormat } from "../../../../core/utilities/request.utility";
import { ICharacterDetailFormResponse } from "../../interfaces/api.interfaces";
import { IPlayableCharacter } from "../../interfaces/table.interface";
import { EBtnType } from "../../../../core/enums/btn-type.enum";
import { ICharacterApiForm } from "../../interfaces/form.interface";

@Component({
  selector: 'clt-characters-playable-edit',
  standalone: true,
  imports: [CommonModule, ScrollClassDirective, DefaultBtnComponent, TranslateModule, RouterLink, CheckboxFieldComponent, DatetimeFieldComponent, DropdownFieldComponent, ImageFieldComponent, TextFieldComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './characters-playable-edit.component.html',
  styleUrl: './characters-playable-edit.component.scss'
})
export class CharactersPlayableEditComponent implements OnInit {
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
    arche: new FormControl<EArche[]>([]),
    birthday: [new FormControl<Date | null>(null), [Validators.required]],
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

  public charactersDetailsLink: string = '../../' + EPage.Details;
  public currentLang: string = '';
  public id: string | null = '';
  public loaded: boolean = false;

  private readonly translateKey: string = 'page.characters.playable.create.';
  public readonly btnType: EBtnType = EBtnType.Submit;

  constructor(
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private charactersApiService: CharactersApiService,
    private destroyRef: DestroyRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  public initLanguage(): void {
    this.currentLang = this.translateService.currentLang;
    this.translateService.onLangChange.subscribe((event: LangChangeEvent): void => {
      this.currentLang = event.lang;
    });
  }

  public initRoute(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (typeof this.id === 'string') {
      this.charactersDetailsLink += EPage.ParamId.replace(':id', this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.charactersApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ICharacterDetailFormResponse): void => {
        const character: IPlayableCharacter = response.character;
        this.form.patchValue({
          nameEn: character.name.en,
          nameUa: character.name.ua,
          nameRu: character.name.ru,
          quality: character.quality,
          elementalType: character.elementalType,
          region: character.region,
          bonusAttribute: character.bonusAttribute,
          weapon: character.weapon,
          constellationEn: character.constellation.en,
          constellationUa: character.constellation.ua,
          constellationRu: character.constellation.ru,
          arche: character.arche,
          birthday: character.birthday,
          titleEn: character.title.en,
          titleUa: character.title.ua,
          titleRu: character.title.ru,
          affiliationEn: character.affiliation.en,
          affiliationUa: character.affiliation.ua,
          affiliationRu: character.affiliation.ru,
          icon: character.icon,
          splashArt: character.splashArt,
          cardIcon: character.cardIcon
        });
        this.initOptions();
        this.loaded = true;
      });
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
    if (this.form) {
      const submissionForm: ICharacterApiForm = {
        name: {
          en: this.form.value.nameEn || '',
          ua: this.form.value.nameUa || '',
          ru: this.form.value.nameRu || '',
        },
        quality: convertToUpperDashFormat(this.form.value.quality!) as EQuality,
        elementalType: convertToUpperDashFormat(this.form.value.elementalType!) as EElementType,
        region: convertToUpperDashFormat(this.form.value.region!) as ERegion,
        bonusAttribute: convertToUpperDashFormat(this.form.value.bonusAttribute!) as EBonusAttribute,
        weapon: convertToUpperDashFormat(this.form.value.weapon!) as EWeapon,
        constellation: {
          en: this.form.value.constellationEn || '',
          ua: this.form.value.constellationUa || '',
          ru: this.form.value.constellationRu || '',
        },
        arche: this.form.value.arche || [],
        birthday: this.form.value.birthday || new Date(),
        title: {
          en: this.form.value.titleEn || '',
          ua: this.form.value.titleUa || '',
          ru: this.form.value.titleRu || '',
        },
        affiliation: {
          en: this.form.value.affiliationEn || '',
          ua: this.form.value.affiliationUa || '',
          ru: this.form.value.affiliationRu || '',
        },
        icon: this.form.value.icon || '',
        splashArt: this.form.value.splashArt || '',
        cardIcon: this.form.value.cardIcon || '',
      };

      if (this.id) {
        this.charactersApiService.update(this.id, submissionForm)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((): void => {
            this.router.navigate([this.charactersDetailsLink], { relativeTo: this.route }).then();
          });
      }
    }
  }
}
