import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatProgressBarModule
} from '@angular/material';

import { AgmCoreModule } from '@agm/core';

import 'hammerjs';

import { AppComponent } from './app.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { FestivaldetailComponent } from './festivaldetail/festivaldetail.component';


@NgModule({
  declarations: [
    AppComponent,
    FestivalsComponent,
    FestivaldetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatProgressBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvSlqnrDrDU0FGtNYHjOAULFhxvZB515Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
