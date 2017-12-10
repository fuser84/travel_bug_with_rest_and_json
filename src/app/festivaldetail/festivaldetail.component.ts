import {Component, OnInit, Input} from '@angular/core';
import {Festival} from '../shared/festival';
// two imports below enable routing by id between festival details
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FestivalService } from '../services/festival.service';

@Component({
  selector: 'app-festivaldetail',
  templateUrl: './festivaldetail.component.html',
  styleUrls: ['./festivaldetail.component.scss']
})
export class FestivaldetailComponent implements OnInit {
  // fetch info from another component using Input
  // @Input()
  festival: Festival;


  constructor(private festivalservice: FestivalService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    // fetch info from the params
    let id = +this.route.snapshot.params['id'];
    this.festival = this.festivalservice.getFestival(id);
  }

  goBack(): void {
    this.location.back();
  }

}
