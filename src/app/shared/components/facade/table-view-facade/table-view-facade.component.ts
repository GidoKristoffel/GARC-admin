import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from "../../button/default-btn/default-btn.component";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ViewTableComponent } from "../../table/view-table/view-table.component";
import { ITableMetadata } from "../../../interfaces/table.interface";
import { ELanguage } from "../../../../core/enums/language.enum";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'clt-table-view-facade',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, FormsModule, TranslateModule, ViewTableComponent, RouterLink],
  templateUrl: './table-view-facade.component.html',
  styleUrl: './table-view-facade.component.scss'
})
export class TableViewFacadeComponent {
  @Input() metadata: ITableMetadata[] = [];
  @Input() tableData: { [key: string]: any }[] = [];
  @Input() currentLang: string = ELanguage.English;
  @Input() createItemLink: string = '';
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  public onDelete(event: string): void {
    this.delete.emit(event);
  }
}
