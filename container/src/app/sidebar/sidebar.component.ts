import { Component } from '@angular/core';
import { ContentService } from '../content/content.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private contentService: ContentService
  ) { }

  public navigate(url: string) {
    this.contentService.navigate(url);
  }
}
