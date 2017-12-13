import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../services/festival.service';
import {Festival} from '../shared/festival';
import {FormControl} from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  festivals: Festival[];

  selectedFestival: Festival;

  myControl: FormControl = new FormControl();

  constructor(private festivalService: FestivalService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.festivalService.getFestivals()
      .then(festivals => this.festivals = festivals);
  }

  onSelect(festival: Festival ) {
    this.selectedFestival = festival;
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '400px', height: '450px'});
  }

}
