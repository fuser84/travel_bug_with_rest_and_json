import {Component, OnInit, Input} from '@angular/core';
import {Festival} from '../shared/festival';
import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-festivaldetail',
  templateUrl: './festivaldetail.component.html',
  styleUrls: ['./festivaldetail.component.scss']
})
export class FestivaldetailComponent implements OnInit {
  @Input()
  festival: Festival;


  constructor() {
  }

  ngOnInit() {
  }

}
