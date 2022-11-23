import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { RegisterViewComponent } from './components/register-view/register-view.component';
import { DataGatheringViewComponent } from './components/data-gathering-view/data-gathering-view.component';
import { TopBarComponent } from './template/top-bar/top-bar.component';
import { BackgroundComponent } from './template/background/background.component';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DetailsViewComponent } from './components/details-view/details-view.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { CarRegistrationComponent } from './components/car-registration/car-registration.component';

const appRoutes : Routes = [
  {path: '', component: LoginViewComponent},
  {path: 'register', component: RegisterViewComponent},
  {path: 'data_gathering', component: DataGatheringViewComponent},
  {path: 'list', component: ListViewComponent},
  {path: 'details', component: DetailsViewComponent},
  {path: 'booking-details', component: BookingDetailsComponent},
  {path: 'car-registration', component: CarRegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    DataGatheringViewComponent,
    TopBarComponent,
    BackgroundComponent,
    ListViewComponent,
    DetailsViewComponent,
    BookingDetailsComponent,
    CarRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
