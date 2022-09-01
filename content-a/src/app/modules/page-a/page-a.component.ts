import { Component } from '@angular/core';
import { LocalizationService } from 'src/app/shared/services/localization/localization.service';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent {
  lang: any;

  constructor(
    private localizationService: LocalizationService
  ) {
    this.lang = this.localizationService.translateLanguage();
  }
}
