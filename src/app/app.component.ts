import { Component } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeEnglish from '@angular/common/locales/en';
import localeCroatian from '@angular/common/locales/hr';
import { TranslateService } from '@ngx-translate/core';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  locale = 'en';

  languages: string[]= [
    'en',
    'hr'
  ]

  selectedLanguage:string = 'en';
  constructor(
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('en');
    this.registerCulture('en');
  }

  public useLanguage(language: string) {
    this.translate.use(language);
    this.locale = language;
    this.registerCulture(language);
  }
  public registerCulture(culture: string) {
    if (!culture) {
        return;
    }

    this.locale = culture;

    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
        case 'hr': {
            registerLocaleData(localeCroatian);
            break;
        }
        default: {
          registerLocaleData(localeEnglish);
          break;
        }
    }
  }
}
