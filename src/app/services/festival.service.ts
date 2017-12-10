import {Injectable} from '@angular/core';
import {Festival} from '../shared/festival';
import {FESTIVALS} from '../shared/festivals';

@Injectable()
export class FestivalService {

  constructor() {
  }

  getFestivals(): Festival[] {
    return FESTIVALS;
  }

  getFestival(id: number): Festival {
    return FESTIVALS.filter(festival => festival.id === id)[0];
  }

  getFeaturedFestival(): Festival {
    return FESTIVALS.filter(festival => festival.featured)[0];
  }

  getFestivalPrices(): Festival[] {
    return FESTIVALS.filter(prices => prices.attendance_price);
  }

}
