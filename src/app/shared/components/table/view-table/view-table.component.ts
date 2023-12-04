import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EHeaderType } from "../../../../core/enums/table.enum";
import { TranslateModule } from "@ngx-translate/core";
import { IHeader } from "../../../../modules/characters/interfaces/table.interface";
import { ELanguage } from "../../../../core/enums/language.enum";
import { TableScrollDirective } from "../../../directives/table-scroll/table-scroll.directive";

@Component({
  selector: 'clt-view-table',
  standalone: true,
  imports: [CommonModule, TranslateModule, TableScrollDirective],
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.scss'
})
export class ViewTableComponent {
  @Input() headers: IHeader[] = [];
  @Input() body: {[key: string]: any}[] = [];
  @Input() currentLang: string = ELanguage.English;

  protected readonly headerType = EHeaderType;
}
