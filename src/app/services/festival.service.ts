import {Injectable} from '@angular/core';
import {Festival} from '../shared/festival';
import {FESTIVALS} from '../shared/festivals';

@Injectable()
export class FestivalService {

  constructor() {
  }

  getFestivals(): Promise<Festival[]> {
    // return FESTIVALS;
    return new Promise (resolve => {
      // simulate server latency with 2 second delay
      setTimeout ( () => resolve(FESTIVALS), 2000);
    });
  }

  getFestival(id: number): Promise<Festival> {
    return new Promise( resolve => {
      setTimeout(() => resolve(FESTIVALS.filter(festival => festival.id === id)[0]), 2000);
    });
  }

  getFeaturedFestival(): Promise<Festival> {
    return new Promise (resolve => {
      setTimeout(() => resolve(FESTIVALS.filter(festival => festival.featured)[0]), 2000);
    });
  }

  getFestivalPrices(): Promise<Festival[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(FESTIVALS.filter(prices => prices.attendance_price)), 2000);
    });
  }

}
