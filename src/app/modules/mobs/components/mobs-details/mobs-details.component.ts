import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from '../../../../core/classes/shared-details/shared-details';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/services/language/language.service';
import { MobsMetadataService } from '../../services/mobs-metadata/mobs-metadata.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ICharacterDetailFormResponse } from '../../../characters/interfaces/api.interfaces';
import { MobsApiService } from '../../api/mobs.api.service';
import { IMob } from '../../interfaces/common.inteface';
import { IMobDetailsResponse } from '../../interfaces/api.interfaces';
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { FormatPipeModule } from "ngx-date-fns";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldViewComponent } from "../../../../shared/components/view/text-field-view/text-field-view.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-mobs-details',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, FormatPipeModule, ScrollClassDirective, TextFieldViewComponent, TranslateModule, RouterLink],
  templateUrl: './mobs-details.component.html',
  styleUrl: './mobs-details.component.scss',
})
export class MobsDetailsComponent extends SharedDetails implements OnInit {
  public mob!: IMob;

  constructor(
    private mobsMetadataService: MobsMetadataService,
    private mobsApiService: MobsApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.mobsMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.mobsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: IMobDetailsResponse): IMob => (this.mob = response.mob),
      );
  }
}
