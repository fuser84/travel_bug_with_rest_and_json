import {Injectable} from '@angular/core';
import {Festival} from '../shared/festival';
import {FESTIVALS} from '../shared/festivals';
// using RxJS
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class FestivalService {

  constructor() {
  }
// <---Promise approach--->
//   getFestivals(): Promise<Festival[]> {
//     return new Promise (resolve => {
//       // simulate server latency with 2 second delay
//       setTimeout ( () => resolve(FESTIVALS), 2000);
//     });
//   }

  // <---RxJS approach-->
  getFestivals(): Observable<Festival[]> {
    return Observable.of(FESTIVALS).delay(2000);
  }

  // <--Promise approach-->
  // getFestival(id: number): Promise<Festival> {
  //   return new Promise( resolve => {
  //     setTimeout(() => resolve(FESTIVALS.filter(festival => festival.id === id)[0]), 2000);
  //   });
  // }

  // <--RxJS--> approach
  getFestival(id: number): Observable<Festival> {
    return Observable.of(FESTIVALS.filter(festival => festival.id === id)[0]).delay (2000);
  }

  // <--Promise approach -->
  // getFeaturedFestival(): Promise<Festival> {
  //   return new Promise (resolve => {
  //     setTimeout(() => resolve(FESTIVALS.filter(festival => festival.featured)[0]), 2000);
  //   });
  // }

  // <-- RxJS approach -->
  getFeaturedFestival(): Observable<Festival> {
    return Observable.of(FESTIVALS.filter(festival => festival.featured)[0]).delay (2000);
  }


  // <--Promise approach -->
  // getFestivalPrices(): Promise<Festival[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(FESTIVALS.filter(prices => prices.attendance_price)), 2000);
  //   });
  // }

  // <--RxJS approach -->
  getFestivalPrices(): Observable<Festival[]> {
    return Observable.of(FESTIVALS.filter(prices => prices.attendance_price)).delay(2000);
  }

  getFestivalIds(): Observable<number[]> {
    return Observable.of(FESTIVALS.map(festival => festival.id)).delay(2000);
  }

}
