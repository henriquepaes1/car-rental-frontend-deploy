import { Component, OnInit } from '@angular/core';
import { BookingModel } from 'src/app/models/booking-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  booking = new BookingModel();

  ngOnInit(): void {
    this.route.queryParams.subscribe((a: any) => {
      this.booking.address = a.address;
      this.booking.date = a.date;
      this.booking.vehicle_type = a.vehicle_type;
      this.booking.carJson = a.carJson;
    });
  }

}
