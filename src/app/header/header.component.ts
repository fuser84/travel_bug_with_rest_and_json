import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../services/festival.service';
import {Festival} from '../shared/festival';
import {FormControl} from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material';
import {LoginComponent} from '../login/login.component';

// add modules to manipulate DOM
import { AfterViewInit, ElementRef} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  festivals: Festival[];

  selectedFestival: Festival;

  myControl: FormControl = new FormControl();

  constructor(private festivalService: FestivalService,
              private dialog: MatDialog, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.festivalService.getFestivals()
      .subscribe(festivals => this.festivals = festivals);
  }

  // method for DOM manipulation
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#logo1').addEventListener('click', this._onClickHeading1.bind(this));
    this.elementRef.nativeElement.querySelector('#logo2').addEventListener('click', this._onClickHeading2.bind(this));
  }

  _onClickHeading1(e) {
    if (e.target.classList.contains('animated')) {
      e.target.classList.remove('animated', 'bounceIn');
      setTimeout(() => {e.target.classList.add('animated', 'bounceIn'); }, 0.0000001);
    }else {
      e.target.classList.add('animated', 'bounceIn');
    }
    console.log(e);
  }
  _onClickHeading2(e) {
    if (e.target.classList.contains('animated')) {
      e.target.classList.remove('animated', 'shake');
      setTimeout(() => {e.target.classList.add('animated', 'shake'); }, 0.0000001);
    }else {
      e.target.classList.add('animated', 'shake');
    }
    console.log(e);
  }


  onSelect(festival: Festival ) {
    this.selectedFestival = festival;
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '400px', height: '450px'});
  }

}
