import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter(promo => promo.id === id)[0];
  }

  getUpcomingMetalPromotion(): Promotion {
    return PROMOTIONS.filter(promo => promo.upcoming)[0];
  }

  getUpcomingDrumPromotion(): Promotion {
    return PROMOTIONS.filter(promo => promo.upcoming)[1];
  }
  getUpcomingIndiePromotion(): Promotion {
    return PROMOTIONS.filter(promo => promo.upcoming)[2];
  }


}
