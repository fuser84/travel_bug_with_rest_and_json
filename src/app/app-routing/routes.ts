import { Routes } from '@angular/router';

import { FestivalsComponent } from '../festivals/festivals.component';
import { FestivaldetailComponent } from '../festivaldetail/festivaldetail.component';
import { HomeComponent } from '../home/home.component';
import { OrderComponent } from '../order/order.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'festivals', component: FestivalsComponent},
  {path: 'festivaldetail/:id', component: FestivaldetailComponent},
  {path: 'order', component: OrderComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
