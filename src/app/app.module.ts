import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatProgressBarModule,
} from '@angular/material';

import {MatTooltipModule} from '@angular/material/tooltip';

import {MatSnackBarModule} from '@angular/material';

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

import { baseURL } from './shared/baseurl';
import { ProcessHttpmsgService} from './services/process-httpmsg.service';

import {RestangularModule, Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive';

import { FeedbackService } from './services/feedback.service';

// ng-translate modules
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// required for AOT compilation
export function HttpLoaderFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

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
    LoginComponent,
    HighlightDirective,

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
    ReactiveFormsModule, MatAutocompleteModule, AppRoutingModule, MatExpansionModule, MatSnackBarModule, MatNativeDateModule,
    MatTooltipModule, RestangularModule.forRoot(RestangularConfigFactory), TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvSlqnrDrDU0FGtNYHjOAULFhxvZB515Y'
    }),
  ],
  providers: [ FestivalService, PromotionService, ProcessHttpmsgService, FeedbackService,
    {provide: 'BaseURL', useValue: baseURL }],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
