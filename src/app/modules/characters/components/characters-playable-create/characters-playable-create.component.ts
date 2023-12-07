import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { DropdownFieldComponent } from '../../../../shared/components/fields/dropdown-field/dropdown-field.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { TextFieldComponent } from '../../../../shared/components/fields/text-field/text-field.component';
import { TranslateModule } from '@ngx-translate/core';
import { IOption } from '../../../../shared/interfaces/input.interface';
import { EQuality } from '../../enums/quality.enum';
import { EElementType } from '../../enums/element-type.enum';
import { ERegion } from '../../enums/region.enum';
import { EBonusAttribute } from '../../enums/bonus-attribute.enum';
import { EWeapon } from '../../enums/weapon.enum';
import { EBtnType } from '../../../../core/enums/btn-type.enum';
import { CheckboxFieldComponent } from '../../../../shared/components/fields/checkbox-field/checkbox-field.component';
import { EArche } from '../../enums/arche.enum';
import { DatetimeFieldComponent } from '../../../../shared/components/fields/datetime-field/datetime-field.component';
import { ImageFieldComponent } from '../../../../shared/components/fields/image-field/image-field.component';
import { FormCacheService } from '../../../../core/services/form-cache/form-cache.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CharactersApiService } from '../../api/characters.api.service';
import { convertToUpperDashFormat } from '../../../../core/utilities/request.utility';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EPage } from '../../../../core/enums/page.enum';
import { ICharacterApiForm } from '../../interfaces/form.interface';

@Component({
  selector: 'clt-characters-playable-create',
  standalone: true,
  imports: [
    CommonModule,
    DefaultBtnComponent,
    DropdownFieldComponent,
    ReactiveFormsModule,
    ScrollClassDirective,
    TextFieldComponent,
    TranslateModule,
    CheckboxFieldComponent,
    DatetimeFieldComponent,
    ImageFieldComponent,
    RouterLink,
  ],
  templateUrl: './characters-playable-create.component.html',
  styleUrl: './characters-playable-create.component.scss',
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
    cardIcon: ['', [Validators.required]],
  });

  public qualityOptions: IOption[] = [];
  public elementOptions: IOption[] = [];
  public regionOptions: IOption[] = [];
  public bonusAttributeOptions: IOption[] = [];
  public weaponOptions: IOption[] = [];
  public archeOptions: IOption[] = [];

  public readonly btnType: EBtnType = EBtnType.Submit;
  public readonly charactersViewLink: string = '../' + EPage.View;
  private readonly translateKey: string = 'page.characters.playable.create.';

  constructor(
    private formBuilder: FormBuilder,
    private formCacheService: FormCacheService,
    private destroyRef: DestroyRef,
    private charactersApiService: CharactersApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.loadCachedData();
  }

  private initOptions(): void {
    this.qualityOptions = this.generateOptions<typeof EQuality>(
      EQuality,
      'select.quality',
    );
    this.elementOptions = this.generateOptions<typeof EElementType>(
      EElementType,
      'select.element',
    );
    this.regionOptions = this.generateOptions<typeof ERegion>(
      ERegion,
      'select.region',
    );
    this.bonusAttributeOptions = this.generateOptions<typeof EBonusAttribute>(
      EBonusAttribute,
      'select.bonus-attribute',
    );
    this.weaponOptions = this.generateOptions<typeof EWeapon>(
      EWeapon,
      'select.weapon',
    );
    this.archeOptions = this.generateOptions<typeof EArche>(
      EArche,
      'checkbox.arche',
    );
  }

  private initForm(): void {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data): void => {
        this.formCacheService.saveFormData(data);
      });
  }

  private loadCachedData(): void {
    const cachedData = this.formCacheService.loadFormData();
    if (cachedData) {
      this.form.patchValue(cachedData);
    }
  }

  private generateOptions<T extends Object>(
    enumObject: T,
    translateSubKey: string = '',
  ): IOption[] {
    return Object.values(enumObject).map((value): IOption => {
      return {
        label: this.translateKey + translateSubKey + '.' + value,
        value,
      };
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
        elementalType: convertToUpperDashFormat(
          this.form.value.elementalType!,
        ) as EElementType,
        region: convertToUpperDashFormat(this.form.value.region!) as ERegion,
        bonusAttribute: convertToUpperDashFormat(
          this.form.value.bonusAttribute!,
        ) as EBonusAttribute,
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

      this.charactersApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router
            .navigate([this.charactersViewLink], { relativeTo: this.route })
            .then();
        });
    }
  }
}
