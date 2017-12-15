import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FestivalService} from '../services/festival.service';
import {Festival} from '../shared/festival';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  step = 0;
  fests = new FormControl();
  festList: Festival[];
  prices;
  specific_price = 0;
  arr = {};

  user = {};

  constructor(private festivalservice: FestivalService) {
  }

  ngOnInit() {
    this.festivalservice.getFestivals()
      .subscribe(festList => this.festList = festList);

    this.festivalservice.getFestivalPrices()
      .subscribe(prices => this.prices = prices);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getPrice(param: number, param2: string) {
   // debugger;
    let name = param2;

    if (param2 in this.arr) {
      delete this.arr[param2];
      this.specific_price -= param;
      return;
    }
    this.arr[name] = param;
    this.specific_price += param;

  }

  onSubmit() {
  console.log(`User:`, this.user);
  }

}
