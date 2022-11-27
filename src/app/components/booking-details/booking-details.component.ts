import { Component, OnInit } from '@angular/core';
import { BookingModel } from 'src/app/models/booking-model';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car-model';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bookingDuration: number; // booking duration, coming from Reservation Object
  carRent: number; // value of the rent, coming from the Car Object

  carProtection ?= false;
  carProtectionValue: number;

  fullProtection ?= false;
  fullProtectionValue: number;

  tpProtection ?= false;
  tpProtectionValue: number;

  glassProtection ?= false;
  glassProtectionValue: number;

  extras?: boolean;
  extrasValue: number;

  totalValue: number;

  booking = new BookingModel();
  carInstance = new Car;

  initialDate = new Date;
  finalDate = new Date;

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((a: any) => {
      this.booking.address = a.address;
      this.booking.date = a.date;
      this.booking.vehicle_type = a.vehicle_type;
      this.booking.carJson = a.carJson;
      this.carInstance = JSON.parse(a.carJson);
    });

    let dateArray = [];
    dateArray = this.booking.date.split(" - ");
    //D-M-Y -> Y-M-D
    let initDate = dateArray[0].split("/");
    let finalDate = dateArray[1].split("/");

    this.initialDate = new Date(Number(initDate[2]), Number(initDate[1])-1, Number(initDate[0]));
    this.finalDate = new Date(Number(finalDate[2]), Number(finalDate[1])-1, Number(finalDate[0]));


    this.bookingDuration = this.getDayDiff(this.initialDate, this.finalDate);
    console.log(this.initialDate, this.finalDate, this.bookingDuration);
    this.carRent = this.carInstance.rent;
    this.totalValue = this.carRent * this.bookingDuration;
  }

  updateStatus() {
    
    const teste = document.getElementsByTagName("input")

    this.carProtection = teste.namedItem("car-protection")?.checked;
    this.fullProtection = teste.namedItem("full-protection")?.checked;
    this.tpProtection = teste.namedItem("tp-protection")?.checked;
    this.glassProtection = teste.namedItem("glass-protection")?.checked;

    this.carProtectionValue = this.carProtection ? (this.bookingDuration * 10) : 0;
    this.fullProtectionValue = this.fullProtection ? (this.bookingDuration * 20) : 0;
    this.tpProtectionValue = this.tpProtection ? (this.bookingDuration * 5) : 0;
    this.glassProtectionValue = this.glassProtection ? (this.bookingDuration * 2) : 0;

    this.extras = this.carProtection || this.fullProtection || this.tpProtection || this.glassProtection;
    this.extrasValue = this.bookingDuration * (this.carProtectionValue + this.fullProtectionValue + this.tpProtectionValue + this.glassProtectionValue);

    this.totalValue = this.extras ? this.bookingDuration * this.carRent + this.extrasValue : this.bookingDuration * this.carRent; 
  }

  private getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;
  
    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
  }
}
