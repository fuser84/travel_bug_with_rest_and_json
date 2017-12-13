import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: number): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter(promo => promo.id === id)[0]);
  }

  getUpcomingMetalPromotion(): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter(promo => promo.upcoming)[0]);
  }

  getUpcomingDrumPromotion(): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter(promo => promo.upcoming)[1]);
  }
  getUpcomingIndiePromotion(): Promise <Promotion> {
    return Promise.resolve(PROMOTIONS.filter(promo => promo.upcoming)[2]);
  }


}
