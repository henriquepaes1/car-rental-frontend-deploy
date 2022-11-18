import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Car } from '../models/car-model';

@Injectable({
  providedIn: 'root'
})
export class CarListingService {
  carList: Car[];

  constructor(private http: HttpClient) { 
    this.carList = new Array<Car>;
  }

  listCars(carType: string){
    const params = new HttpParams().set("type", carType);

    this.http.get<Array<Car>>("http://localhost:8080/car-listing/by-type", {params: params}).subscribe(
      (resultado) => {

        for(let i = 0; i < resultado.length; i++){
          this.carList[i] = resultado[i];
        }        
      }
    );
      
    return this.carList;

  }
}
