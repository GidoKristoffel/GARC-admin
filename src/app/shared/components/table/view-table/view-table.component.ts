import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { EHeaderType } from '../../../../core/enums/table.enum';
import { TranslateModule } from '@ngx-translate/core';
import { ELanguage } from '../../../../core/enums/language.enum';
import { TableScrollDirective } from '../../../directives/table-scroll/table-scroll.directive';
import { ClipboardService } from 'ngx-clipboard';
import { DateFnsModule } from 'ngx-date-fns';
import { IconBtnComponent } from '../../button/icon-btn/icon-btn.component';
import { DialogService } from '../../../../core/services/dialog/dialog.service';
import { RouterLink } from '@angular/router';
import { EPage } from '../../../../core/enums/page.enum';
import { ITableMetadata } from '../../../interfaces/table.interface';
import { ScrollClassDirective } from '../../../directives/scroll-class/scroll-class.directive';

@Component({
  selector: 'clt-view-table',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    TableScrollDirective,
    NgOptimizedImage,
    DateFnsModule,
    IconBtnComponent,
    RouterLink,
    ScrollClassDirective,
  ],
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.scss',
})
export class ViewTableComponent {
  @Input() metadata: ITableMetadata[] = [];
  @Input() body: { [key: string]: any }[] = [];
  @Input() currentLang: string = ELanguage.English;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  protected readonly headerType = EHeaderType;
  public readonly characterDetailsLink: string = '../' + EPage.Details;

  public readonly qualityTranslate: string = 'enum.quality.';
  public readonly elementTranslate: string = 'enum.element.';
  public readonly regionTranslate: string = 'enum.region.';
  public readonly bonusAttributeTranslate: string = 'enum.bonus-attribute.';
  public readonly weaponTranslate: string = 'enum.weapon.';
  public readonly archeTranslate: string = 'enum.arche.';
  public readonly mobTypeTranslate: string = 'enum.mob-type.';
  public readonly talentTypeTranslate: string = 'enum.talent-type.';
  public readonly ascensionTypeTranslate: string = 'enum.ascension-type.';
  public readonly rarityTranslate: string = 'enum.rarity.';
  public readonly farmDaysTranslate: string = 'enum.farm-days.';
  public readonly weaponMaterialTypeTranslate: string = 'enum.weapon-type.';
  public readonly enhancementMaterialTypeTranslate: string = 'enum.enhancement-type.';

  constructor(
    private clipboardService: ClipboardService,
    private dialogService: DialogService,
  ) {}

  public copy(text: string): void {
    this.clipboardService.copyFromContent(text);
  }

  public onDelete(id: string): void {
    this.dialogService.openCharacterDelete((): void => {
      this.delete.emit(id);
    });
  }
}
