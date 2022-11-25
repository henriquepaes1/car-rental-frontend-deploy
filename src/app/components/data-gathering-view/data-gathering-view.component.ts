import { Component, OnInit } from '@angular/core';
import { BookingModel } from 'src/app/models/booking-model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-data-gathering-view',
  templateUrl: './data-gathering-view.component.html',
  styleUrls: ['./data-gathering-view.component.css']
})
export class DataGatheringViewComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router) { }

  types = ["Luxury", "Premium", "Economy", "Super Economy"];

  
  public bookingModel = new BookingModel();

  ngOnInit(): void {
    try {
      this.route.queryParams.subscribe((a: any) => {
        this.bookingModel.address = a.address;
        this.bookingModel.date = a.date;
        this.bookingModel.vehicle_type = a.vehicle_type;
      });
    } catch (error) {
      
    }
    console.log(this.bookingModel);
  }

  onSubmit() : void {
    let isValid : Boolean;
    isValid = false;
    
    if(this.bookingModel.address != null && 
      this.bookingModel.date != null &&
      this.bookingModel.vehicle_type != null){
        isValid = true;
    }
    if(isValid){
      this.router.navigate(['/list'],{
        queryParams: this.bookingModel
      });
    }
  }
}
