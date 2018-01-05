import { Component, OnInit, Inject } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import {flyInOut, expand} from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  metalPromotion: Promotion;
  drumPromotion: Promotion;
  indiePromotion: Promotion;
  festivalErrMess: string;

  constructor(private promotionservice: PromotionService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.promotionservice.getUpcomingMetalPromotion()
      .subscribe(metalPromotion => this.metalPromotion = metalPromotion,
        errmess => this.festivalErrMess = <any>errmess);

    this.promotionservice.getUpcomingDrumPromotion()
      .subscribe(drumPromotion => this.drumPromotion = drumPromotion,
        errmess => this.festivalErrMess = <any>errmess);

    this.promotionservice.getUpcomingIndiePromotion()
      .subscribe(indiePromotion => this.indiePromotion = indiePromotion,
        errmess => this.festivalErrMess = <any>errmess);
  }

}
