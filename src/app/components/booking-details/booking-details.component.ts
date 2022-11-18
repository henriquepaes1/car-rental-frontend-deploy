import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.bookingDuration = 1;
    this.carRent = 150;
    this.totalValue = this.carRent * this.bookingDuration;
   }

  ngOnInit(): void {
  }

  updateStatus() {
    
    const teste = document.getElementsByTagName("input")

    this.carProtection = teste.namedItem("car-protection")?.checked;
    this.fullProtection = teste.namedItem("full-protection")?.checked;
    this.tpProtection = teste.namedItem("tp-protection")?.checked;
    this.glassProtection = teste.namedItem("glass-protection")?.checked;

    this.carProtectionValue = this.carProtection ? 10 : 0;
    this.fullProtectionValue = this.fullProtection ? 20 : 0;
    this.tpProtectionValue = this.tpProtection ? 5 : 0;
    this.glassProtectionValue = this.glassProtection ? 2 : 0;

    this.extras = this.carProtection || this.fullProtection || this.tpProtection || this.glassProtection;
    this.extrasValue = this.bookingDuration * (this.carProtectionValue + this.fullProtectionValue + this.tpProtectionValue + this.glassProtectionValue);

    this.totalValue = this.extras ? this.bookingDuration * this.carRent + this.extrasValue : this.bookingDuration * this.carRent;
    
  }

}
