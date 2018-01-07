import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor(private translate: TranslateService) {

  }

  languages = [
    {id: '1', viewValue: 'ENGLISH', name: 'en'},
    {id: '2', viewValue: 'UKRAINIAN', name: 'ua'},
    {id: '3', viewValue: 'NORWEGIAN', name: 'no'}
  ];

  currencies = [
    {id: '1', viewValue: 'USD'},
    {id: '2', viewValue: 'EURO'},
    {id: '3', viewValue: 'UAH'}
  ];

  ngOnInit() {
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
