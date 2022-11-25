import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  currentURL = window.location.pathname;
  active = "stepper-item active";

  c1 = this.currentURL === '/data_gathering';
  c2 = this.currentURL === '/list';
  c3 = this.currentURL === '/details';
  c4 = this.currentURL === '/booking-details';

  constructor() { }

  ngOnInit(): void { 
  }

}
