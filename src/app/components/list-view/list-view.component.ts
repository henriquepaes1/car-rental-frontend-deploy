import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car-model';

import { CarListingService } from 'src/app/services/car-listing.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  carList: Car[] = new Array<Car>;

  constructor(private listing: CarListingService) { }

  ngOnInit(): void {
    this.carList = this.listing.listCars("luxury");
    console.log(this.carList);
  }

}
