import { Component, OnInit } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  metalPromotion: Promotion;
  drumPromotion: Promotion;
  indiePromotion: Promotion;

  constructor(private promotionservice: PromotionService) { }

  ngOnInit() {
    this.promotionservice.getUpcomingMetalPromotion()
      .then(metalPromotion => this.metalPromotion = metalPromotion);

    this.promotionservice.getUpcomingDrumPromotion()
      .then(drumPromotion => this.drumPromotion = drumPromotion);

    this.promotionservice.getUpcomingIndiePromotion()
      .then(indiePromotion => this.indiePromotion = indiePromotion);
  }

}
