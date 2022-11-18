import { Component, OnInit } from '@angular/core';
import { CarListingService } from 'src/app/services/car-listing.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  constructor(private listing: CarListingService) { }

  ngOnInit(): void {
    
  }

}
