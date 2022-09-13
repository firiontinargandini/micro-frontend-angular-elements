import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from './shared/services/localization/localization.service';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lang: any;
  isReceiveResponse: boolean = false;
  action!: string;

  constructor(
    private router: Router,
    private localizationService: LocalizationService
  ) {
    this.lang = this.localizationService.translateLanguage();
  }

  ngOnInit(): void {
    this.router.initialNavigation();
  }

  openModal(type: string, title: string, description: string) {
    const customEvent = new CustomEvent('modal', { detail:
      {
        type, detail: {
          title,
          description,
          option1: type === 'confirmation' ? 'Yes' : '',
          option2: type === 'confirmation' ? 'No': ''
        }
      }
    });

    window.dispatchEvent(customEvent);

    window.addEventListener('modalResponse', (customEvent: any) => {
      if (customEvent.detail === 'Yes') {
        this.isReceiveResponse = true;
        this.action = "Do Action";
      } else if (customEvent.detail === 'No') {
        this.isReceiveResponse = true;
        this.action = "Don't Do Action"
      }
    });
  }
}


