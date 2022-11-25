import { Injectable } from '@angular/core';
import { Car } from '../models/car-model';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarRegisterService {

  constructor(private http: HttpClient) {}

  registerCar(car: Car){
    this.http.post<Car>("http://localhost:8080/car-creation/add-car", car).subscribe(
      (response) => {});
  }
}
