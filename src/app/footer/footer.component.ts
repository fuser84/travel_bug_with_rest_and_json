import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor() { }

  languages = [
    {id: '1', viewValue: 'ENGLISH'},
    {id: '2', viewValue: 'UKRAINIAN'},
    {id: '3', viewValue: 'NORWEGIAN'}
  ];

  currencies = [
    {id: '1', viewValue: 'USD'},
    {id: '2', viewValue: 'EURO'},
    {id: '3', viewValue: 'UAH'}
  ];

  ngOnInit() {
  }

}
