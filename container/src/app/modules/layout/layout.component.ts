import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MicrofrontendService } from '../../shared/services/microfrontend/microfrontend.service';
import { LocalizationService } from '../../shared/services/localization/localization.service';
import { SharedModalService } from 'src/app/shared/services/shared-modal/shared-modal.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  public url!: string;

  lang: any;

  constructor(
    private router: Router,
    private microfrontendService: MicrofrontendService,
    private localizationService: LocalizationService,
    private sharedModalService: SharedModalService
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

  ngOnInit(): void {
    this.subs = [];

    window.addEventListener('modal', (customEvent: any) => {
      this.sharedModalService.openModal(customEvent.detail);
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((each) => each.unsubscribe());
  }

  private navigate(url: string) {
    this.microfrontendService.navigate(url);
  }
}
