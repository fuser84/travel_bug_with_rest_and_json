import {Component, OnInit, Inject} from '@angular/core';

import {Festival} from '../shared/festival';
import {CommentLink} from '../shared/commentLink';
// import { FESTIVALS } from '../shared/festivals';
import { FestivalService } from '../services/festival.service';




@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.scss']
})
export class FestivalsComponent implements OnInit {

  festivals: Festival[];


  constructor(private festivalService: FestivalService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
     this.festivalService.getFestivals()
      .subscribe(festivals => this.festivals = festivals);
  }

}
