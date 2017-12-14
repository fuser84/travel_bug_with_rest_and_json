import {Injectable} from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() {
  }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: number): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS.filter(promo => promo.id === id)[0]), 2000);
    });
  }

  getUpcomingMetalPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS.filter(promo => promo.upcoming)[0]), 2000);
    });
  }

  getUpcomingDrumPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
    setTimeout(() =>  resolve(PROMOTIONS.filter(promo => promo.upcoming)[1]), 2000);
    });
  }

  getUpcomingIndiePromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS.filter(promo => promo.upcoming)[2]), 2000);
    });
  }


}
