import { Injectable } from '@angular/core';
import { ITableMetadata } from '../../../../shared/interfaces/table.interface';
import { IFormMetadata } from '../../../../shared/interfaces/form.interface';
import { viewMetadata } from '../../data-structures/view.sctructure';
import { editMetadata } from '../../data-structures/edit.structure';
import { detailsMetadata } from '../../data-structures/details.sctructure';
import { createMetadata } from '../../data-structures/create.sctructure';

@Injectable({
  providedIn: 'root',
})
export class EliteBossesMetadataService {
  private readonly viewMetadata: ITableMetadata[] = viewMetadata;
  private readonly createMetadata: IFormMetadata[] = createMetadata;
  private readonly editMetadata: IFormMetadata[] = editMetadata;
  private readonly detailsMetadata: IFormMetadata[] = detailsMetadata;

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
