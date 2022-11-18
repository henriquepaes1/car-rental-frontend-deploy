import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarListingService {

  constructor(private http: HttpClient) { }

  listCars(carType: string){
    const params = new HttpParams().set("type", carType);

    this.http.get("http://localhost:8080/car-listing/by-type", {params: params}).subscribe(
      (resultado) => {
        console.log(resultado);
      }
    );

  }
}
