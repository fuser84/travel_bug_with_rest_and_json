import { Component, OnInit, Inject } from '@angular/core';
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

  constructor(private promotionservice: PromotionService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.promotionservice.getUpcomingMetalPromotion()
      .subscribe(metalPromotion => this.metalPromotion = metalPromotion);

    this.promotionservice.getUpcomingDrumPromotion()
      .subscribe(drumPromotion => this.drumPromotion = drumPromotion);

    this.promotionservice.getUpcomingIndiePromotion()
      .subscribe(indiePromotion => this.indiePromotion = indiePromotion);
  }

}
