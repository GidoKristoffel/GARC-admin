import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from "../../button/default-btn/default-btn.component";
import { ScrollClassDirective } from "../../../directives/scroll-class/scroll-class.directive";
import { TextFieldViewComponent } from "../../view/text-field-view/text-field-view.component";
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import { IFormMetadata } from "../../../interfaces/form.interface";
import { EFormType } from "../../../../core/enums/form.enum";

@Component({
  selector: 'clt-table-details-facade',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, ScrollClassDirective, TextFieldViewComponent, TranslateModule, RouterLink],
  templateUrl: './table-details-facade.component.html',
  styleUrl: './table-details-facade.component.scss'
})
export class TableDetailsFacadeComponent {
  @Input() details: { [key: string]: any; } | undefined;
  @Input() metadata: IFormMetadata[] = [];
  @Input() viewLink: string = '';
  @Input() editLink: string = '';

  public readonly fieldType: typeof EFormType = EFormType;
}
