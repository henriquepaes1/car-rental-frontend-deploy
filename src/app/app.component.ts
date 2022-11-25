import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unidas-web-app';
  currentURL = window.location.pathname;


  status_bar = this.currentURL === '/data_gathering' || this.currentURL === '/list' || 
  this.currentURL === '/details' || this.currentURL === '/booking-details';
}
