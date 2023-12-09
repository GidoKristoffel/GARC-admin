import { Injectable } from '@angular/core';
import { ITableMetadata } from "../../../../shared/interfaces/table.interface";
import { viewMetadata } from "../../data-structures/view.sctructure";
import { editMetadata } from "../../data-structures/edit.structure";
import { IFormMetadata } from "../../../../shared/interfaces/form.interface";
import { detailsMetadata } from "../../data-structures/details.sctructure";

@Injectable({
  providedIn: 'root'
})
export class CharactersPlayableMetadataService {
  private readonly viewMetadata: ITableMetadata[] = viewMetadata;
  private readonly editMetadata: IFormMetadata[] = editMetadata;
  private readonly detailsMetadata: IFormMetadata[] = detailsMetadata;

  constructor() { }

  public getView(): ITableMetadata[] {
    return this.viewMetadata;
  }

  public getCreate(): void {

  }

  public getEdit(): IFormMetadata[] {
    return this.editMetadata;
  }

  public getDetails(): IFormMetadata[] {
    return this.detailsMetadata;
  }
}
