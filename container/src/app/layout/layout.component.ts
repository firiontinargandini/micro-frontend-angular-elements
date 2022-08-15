import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ContentService } from '../content/content.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public url!: string;

  constructor(
    private router: Router,
    private contentService: ContentService
  ) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        if (route.url === '/') return;

        this.navigate(route.url);
      }
    });
  }

  private navigate(url: string) {
    this.contentService.navigate(url);
  }
}
