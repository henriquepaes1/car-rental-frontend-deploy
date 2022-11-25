import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car-model';

import { CarListingService } from 'src/app/services/car-listing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { BookingModel } from 'src/app/models/booking-model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  carList: Car[] = new Array<Car>();
  bookingModel = new BookingModel();

  constructor(private listing: CarListingService, private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((a: any) => {
      this.bookingModel.address = a.address;
      this.bookingModel.date = a.date;
      this.bookingModel.vehicle_type = a.vehicle_type;
    });
    //this.carList = this.listing.listCars(this.bookingModel.vehicle_type.toLocaleLowerCase());
    // this.carList = this.listing.listCarsNoRequest(this.bookingModel.vehicle_type.toLocaleLowerCase());

    this.carList = this.listing.listCars(this.bookingModel.vehicle_type.toLocaleLowerCase());
  }

  onClickCarElement(car: Car) : void{
    this.bookingModel.carJson = JSON.stringify(car);
    this.router.navigate(['/details'],{
      queryParams: this.bookingModel
    });
  }

  btnGoBack() : void {
    this.router.navigate(['/data_gathering'],{
      queryParams: this.bookingModel
    });
  }

}
