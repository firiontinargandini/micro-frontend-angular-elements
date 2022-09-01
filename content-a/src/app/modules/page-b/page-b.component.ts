import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/shared/services/localization/localization.service';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss']
})
export class PageBComponent {
  lang: any;

  constructor(
    private localizationService: LocalizationService
  ) {
    this.lang = this.localizationService.translateLanguage();
  }

}
