import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatProgressBarModule
} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { FestivaldetailComponent } from './festivaldetail/festivaldetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';

import { FestivalService } from './services/festival.service';
import { PromotionService } from './services/promotion.service';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FestivalsComponent,
    FestivaldetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrderComponent,
    ContactComponent,
    Parallax,
    LoginComponent
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
    ReactiveFormsModule, MatAutocompleteModule, AppRoutingModule, MatExpansionModule, MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvSlqnrDrDU0FGtNYHjOAULFhxvZB515Y'
    })
  ],
  providers: [ FestivalService, PromotionService ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
