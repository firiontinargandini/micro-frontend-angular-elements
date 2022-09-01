import { Injectable } from '@angular/core';
import * as en from "../../../../assets/i18n/en.json";
import * as id from "../../../../assets/i18n/id.json";

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  public onLanguageChange(lang: string) {
    localStorage.setItem('selected-language', lang);
    window.location.reload();
  }

  public translateLanguage() {
    const lang = localStorage.getItem('selected-language');

    if (lang) {
      let selectedLang: any;
      if (lang === 'id') {
        selectedLang = (id as any).default;
      } else {
        selectedLang = (en as any).default;
      }

      return selectedLang;
    } else {
      localStorage.setItem('selected-language', 'en');
      window.location.reload();
    }
  }
}
