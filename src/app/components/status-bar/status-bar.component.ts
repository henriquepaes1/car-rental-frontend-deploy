import { Component, OnInit } from '@angular/core';
import { BookingModel } from 'src/app/models/booking-model';
import { Router, ActivatedRoute } from '@angular/router';

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

  bookingModel = new BookingModel;

  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
  }

  onClickDataGathering() : void {
    this.route.queryParams.subscribe((a: any) => {
      this.bookingModel.address = a.address;
      this.bookingModel.date = a.date;
      this.bookingModel.vehicle_type = a.vehicle_type;
      this.bookingModel.carJson = a.carJson;
    });
    this.router.navigate(['/data_gathering'],{
      queryParams: this.bookingModel
    });
  }

  onClickList() : void {
    this.route.queryParams.subscribe((a: any) => {
      this.bookingModel.address = a.address;
      this.bookingModel.date = a.date;
      this.bookingModel.vehicle_type = a.vehicle_type;
      this.bookingModel.carJson = a.carJson;
    });
    this.router.navigate(['/list'],{
      queryParams: this.bookingModel
    });
  }

  onClickDetails() : void {
    this.route.queryParams.subscribe((a: any) => {
      this.bookingModel.address = a.address;
      this.bookingModel.date = a.date;
      this.bookingModel.vehicle_type = a.vehicle_type;
      this.bookingModel.carJson = a.carJson;
    });
    this.router.navigate(['/booking-details'],{
      queryParams: this.bookingModel
    });
  }


}
