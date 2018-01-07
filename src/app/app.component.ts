import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // some i18n
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'no', 'ua']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|no|ua/) ? browserLang : 'en');
    // translate.use('no'); test purposes
  }
// use the method below in needed component in order to provide localization
  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}

