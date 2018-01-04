import {Injectable} from '@angular/core';
import {Festival} from '../shared/festival';
// import {FESTIVALS} from '../shared/festivals'; not needed in case http or rest
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

// using RxJS
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class FestivalService {

  constructor(private http: Http,
              private processHTTPMsgService: ProcessHttpmsgService) {
  }
// <---Promise approach--->
//   getFestivals(): Promise<Festival[]> {
//     return new Promise (resolve => {
//       // simulate server latency with 2 second delay
//       setTimeout ( () => resolve(FESTIVALS), 2000);
//     });
//   }

  // <---Http approach-->
  getFestivals(): Observable<Festival[]> {
    return this.http.get(baseURL + 'festivals')
      .map(res  =>  this.processHTTPMsgService.extractData(res) )
    .catch(error => this.processHTTPMsgService.handleError(error));
  }

  // <--Promise approach-->
  // getFestival(id: number): Promise<Festival> {
  //   return new Promise( resolve => {
  //     setTimeout(() => resolve(FESTIVALS.filter(festival => festival.id === id)[0]), 2000);
  //   });
  // }

  // <--Http--> approach
  getFestival(id: number): Observable<Festival> {
    return this.http.get(baseURL + 'festivals/' + id)
      .map(res  =>  this.processHTTPMsgService.extractData(res))
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  // <--Promise approach -->
  // getFeaturedFestival(): Promise<Festival> {
  //   return new Promise (resolve => {
  //     setTimeout(() => resolve(FESTIVALS.filter(festival => festival.featured)[0]), 2000);
  //   });
  // }

  // <-- Http approach -->
  getFeaturedFestival(): Observable<Festival> {
    return this.http.get(baseURL + 'dishes?featured=true')
      .map(res  =>  this.processHTTPMsgService.extractData(res)[0])
      .catch(error => this.processHTTPMsgService.handleError(error));
  }


  // <--Promise approach -->
  // getFestivalPrices(): Promise<Festival[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(FESTIVALS.filter(prices => prices.attendance_price)), 2000);
  //   });
  // }

  // <--Http approach -->
  getFestivalPrices(): Observable<number[]> {
    return this.getFestivals()
      .map(festivals => festivals.map(festival => festival.attendance_price))
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getFestivalIds(): Observable<number[]> {
    return this.getFestivals()
      .map(festivals => festivals.map(festival => festival.id))
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

}
