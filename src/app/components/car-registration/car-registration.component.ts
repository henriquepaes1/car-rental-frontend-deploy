import { ImagePostingService } from '../../services/image-posting.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car-model';
import { CarRegisterService } from 'src/app/services/car-register.service';

@Component({
  selector: 'app-car-registration',
  templateUrl: './car-registration.component.html',
  styleUrls: ['./car-registration.component.css']
})
export class CarRegistrationComponent implements OnInit {
  carRegisterService: CarRegisterService;
  imagePostingService: ImagePostingService;
  selectedFile: File; 

  constructor(registerService: CarRegisterService, imagePostingService: ImagePostingService) { 
    this.carRegisterService = registerService;
    this.imagePostingService = imagePostingService;
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
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
    let path = (<string>forms.file).split("\\");
    car.image = path[path.length - 1]
    console.log(path);
    console.log(car);

    this.imagePostingService.postImage(this.selectedFile);
    this.carRegisterService.registerCar(car); 
  }

  reload(){
    window.location.reload();
  }

}
