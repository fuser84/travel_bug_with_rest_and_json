import {Injectable} from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';

import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class PromotionService {

  constructor() {
  }

  getPromotions(): Observable<Promotion[]> {
    return Observable.of(PROMOTIONS).delay(2000);
  }

  getPromotion(id: number): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter(promo => promo.id === id)[0]).delay(2000);
  }

  getUpcomingMetalPromotion(): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter(promo => promo.upcoming)[0]).delay(2000);
  }

  getUpcomingDrumPromotion(): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter(promo => promo.upcoming)[1]).delay(2000);
  }

  getUpcomingIndiePromotion(): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter(promo => promo.upcoming)[2]).delay(2000);
  }


}
