import { Injectable } from '@angular/core';
import { Car } from '../models/car-model';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarRegisterService {

  constructor(private http: HttpClient) {}

  registerCar(car: Car){
    this.http.post<Car>("https://car-rental-backend-deploy-production.up.railway.app/car-creation/add-car", car).subscribe(
      (response) => {});
  }
}
