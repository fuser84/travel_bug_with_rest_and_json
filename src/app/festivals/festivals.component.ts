import {Component, OnInit} from '@angular/core';

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

  selectedFestival: Festival;

  constructor(private festivalService: FestivalService) {
  }

  ngOnInit() {
     this.festivalService.getFestivals()
      .subscribe(festivals => this.festivals = festivals);
  }
  onSelect(festival: Festival) {
    this.selectedFestival = festival;
  }

}
