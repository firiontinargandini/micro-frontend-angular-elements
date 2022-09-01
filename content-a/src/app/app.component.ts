import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from './shared/services/localization/localization.service';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lang: any;

  constructor(
    private router: Router,
    private localizationService: LocalizationService
  ) {
    this.lang = this.localizationService.translateLanguage();
  }

  ngOnInit(): void {
    this.router.initialNavigation();
  }
}

