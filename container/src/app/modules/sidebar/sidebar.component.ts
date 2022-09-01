import { Component } from '@angular/core';
import { LocalizationService } from '../../shared/services/localization/localization.service';
import { MicrofrontendService } from '../../shared/services/microfrontend/microfrontend.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  lang: any;

  constructor(
    private microfrontendService: MicrofrontendService,
    private localizationService: LocalizationService
  ) {
    this.lang = this.localizationService.translateLanguage();
  }

  public navigate(url: string) {
    this.microfrontendService.navigate(url);
  }
}
