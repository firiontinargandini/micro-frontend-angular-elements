import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MicrofrontendService } from '../../shared/services/microfrontend/microfrontend.service';
import { LocalizationService } from '../../shared/services/localization/localization.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {
  private subs: Subscription[] = [];
  public url!: string;

  lang: any;

  constructor(
    private router: Router,
    private microfrontendService: MicrofrontendService,
    private localizationService: LocalizationService
  ) {
    const sub = this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.url = route.url;

        if (route.url === '/') return;
        this.navigate(route.url);
      }
    });

    this.subs.push(sub);

    this.lang = this.localizationService.translateLanguage();
  }

  ngOnDestroy(): void {
    this.subs.forEach((each) => each.unsubscribe());
  }

  private navigate(url: string) {
    this.microfrontendService.navigate(url);
  }
}
