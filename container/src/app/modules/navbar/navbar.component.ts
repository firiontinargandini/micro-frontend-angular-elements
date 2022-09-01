import { Component } from '@angular/core';
import { LocalizationService } from '../../shared/services/localization/localization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  lang: any;
  selectedLang: string = 'English';

  constructor(
    private localizationService: LocalizationService
  ) {
    this.lang = this.localizationService.translateLanguage();

    const lang = localStorage.getItem('selected-language');
    this.selectedLang = lang === 'en' ? 'English' : 'Bahasa Indonesia'
  }

  public changeLanguage(lang: string) {
    this.selectedLang = lang;
    this.localizationService.onLanguageChange(lang);
  }
}
