import { Component, OnInit } from '@angular/core';
import { BookingModel } from 'src/app/models/booking-model';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

declare var $: any; 

import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-data-gathering-view',
  templateUrl: './data-gathering-view.component.html',
  styleUrls: ['./data-gathering-view.component.css']
})
export class DataGatheringViewComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router) {

  }

  types = ["Luxury", "Premium", "Economy", "Super Economy"];

  
  public bookingModel = new BookingModel();

  ngOnInit(): void {
    $("#date_range_picker_id").daterangepicker({
      locale: {
        format: "DD/MM/YYYY"
    }
    });
    try {
      this.route.queryParams.subscribe((a: any) => {
        this.bookingModel.address = a.address;
        this.bookingModel.date = a.date;
        this.bookingModel.vehicle_type = a.vehicle_type;
        if(a.date != undefined){
          $('#date_range_picker_id')[0].value = a.date;
        }
      });
    } catch (error) {
      
    }
  }

  onSubmit() : void {
    let isValid : Boolean;
    isValid = true;
    let element = $('#date_range_picker_id')[0];
    if(this.bookingModel.address == null || this.bookingModel.address.length == 0){
      alert("You forgot to fill the field: Address");
      isValid = false;
    }
    if(this.bookingModel.vehicle_type == null){
      alert("You forgot to select a car type");
      isValid = false;
    }
    if(isValid){
      this.bookingModel.date = element.value;
      this.router.navigate(['/list'],{
        queryParams: this.bookingModel
      });
    }
  }
}
