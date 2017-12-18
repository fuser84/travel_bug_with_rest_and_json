import {Injectable} from '@angular/core';
import {Promotion} from '../shared/promotion';
// import {PROMOTIONS} from '../shared/promotions';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class PromotionService {

  constructor(private http: Http,
              private processHTTPMsgService: ProcessHttpmsgService) {
  }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get(baseURL + 'promotions')
      .map(res  =>  this.processHTTPMsgService.extractData(res) );
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions/' + id)
      .map(res => this.processHTTPMsgService.extractData(res));
  }

  getUpcomingMetalPromotion(): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions?upcoming=true')
      .map(res => this.processHTTPMsgService.extractData(res)[0]);
  }

  getUpcomingDrumPromotion(): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions?upcoming=true')
      .map(res => this.processHTTPMsgService.extractData(res)[1]);
  }

  getUpcomingIndiePromotion(): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions?upcoming=true')
      .map(res => this.processHTTPMsgService.extractData(res)[2]);
  }


}
