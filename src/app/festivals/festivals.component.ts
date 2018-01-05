import {Component, OnInit, Inject} from '@angular/core';

import {Festival} from '../shared/festival';
import {CommentLink} from '../shared/commentLink';
// import { FESTIVALS } from '../shared/festivals';
import {FestivalService} from '../services/festival.service';
import {flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.scss'],
  // be sure that animation will be true when router actions occur
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class FestivalsComponent implements OnInit {

  festivals: Festival[];
  errMess: string;


  constructor(private festivalService: FestivalService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
    this.festivalService.getFestivals()
      .subscribe(festivals => this.festivals = festivals,
        errmess => this.errMess = <any>errmess);
  }

}
