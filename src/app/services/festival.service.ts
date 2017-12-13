import {Injectable} from '@angular/core';
import {Festival} from '../shared/festival';
import {FESTIVALS} from '../shared/festivals';

@Injectable()
export class FestivalService {

  constructor() {
  }

  getFestivals(): Promise<Festival[]> {
    // return FESTIVALS;
    return Promise.resolve(FESTIVALS);
  }

  getFestival(id: number): Promise<Festival> {
    return Promise.resolve(FESTIVALS.filter(festival => festival.id === id)[0]);
  }

  getFeaturedFestival(): Promise<Festival> {
    return Promise.resolve(FESTIVALS.filter(festival => festival.featured)[0]);
  }

  getFestivalPrices(): Promise<Festival[]> {
    return Promise.resolve(FESTIVALS.filter(prices => prices.attendance_price));
  }

}
