import {Component, OnInit} from '@angular/core';

import {Festival} from '../shared/festival';
import {CommentLink} from '../shared/commentLink';
import { FESTIVALS } from '../shared/festivals';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.scss']
})
export class FestivalsComponent implements OnInit {

  festivals: Festival[] = FESTIVALS;

  selectedFestival: Festival;

  constructor() {
  }

  ngOnInit() {
  }
  onSelect(festival: Festival) {
    this.selectedFestival = festival;
  }

}
