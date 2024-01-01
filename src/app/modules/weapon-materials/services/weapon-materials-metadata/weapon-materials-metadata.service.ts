import { Injectable } from '@angular/core';
import { ITableMetadata } from "../../../../shared/interfaces/table.interface";
import { IFormMetadata } from "../../../../shared/interfaces/form.interface";
import { createMetadata } from "../../data-structures/create.sctructure";
import { detailsMetadata } from "../../data-structures/details.sctructure";
import { editMetadata } from "../../data-structures/edit.structure";
import { viewMetadata } from "../../data-structures/view.sctructure";

@Injectable({
  providedIn: 'root'
})
export class WeaponMaterialsMetadataService {
  private readonly viewMetadata: ITableMetadata[] = viewMetadata;
  private readonly createMetadata: IFormMetadata[] = createMetadata;
  private readonly editMetadata: IFormMetadata[] = editMetadata;
  private readonly detailsMetadata: IFormMetadata[] = detailsMetadata;

  constructor() {}

  public getView(): ITableMetadata[] {
    return this.viewMetadata;
  }

  public getCreate(): IFormMetadata[] {
    return this.createMetadata;
  }

  public getEdit(): IFormMetadata[] {
    return this.editMetadata;
  }

  public getDetails(): IFormMetadata[] {
    return this.detailsMetadata;
  }
}
