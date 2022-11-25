import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car-model';
import { CarRegisterService } from 'src/app/services/car-register.service';

@Component({
  selector: 'app-car-registration',
  templateUrl: './car-registration.component.html',
  styleUrls: ['./car-registration.component.css']
})
export class CarRegistrationComponent implements OnInit {
  carRegisterService : CarRegisterService;

  constructor(service: CarRegisterService) { 
    this.carRegisterService = service;
  }

  ngOnInit(): void {
  }

  submit(forms: any) {
    console.log(forms);
    let car = new Car();
    car.model = forms.model;
    car.rent = <number>forms.rent;
    car.make = forms.make;
    car.color = forms.color;
    car.type = forms.type;
    car.transmission = forms.transmission;
    car.horsepower = forms.horsepower;
    car.acceleration = <number>forms.acceleration;
    car.seats = <number>forms.seats;
    car.trunk = <number>forms.trunk;
    car.consumption = <number>forms.consumption;
    console.log(car);

    this.carRegisterService.registerCar(car); 
  }


}
