import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Car } from 'src/app/models/car-model';

@Injectable({
  providedIn: 'root'
})
export class CarListingService {
  carList: Car[];

  constructor(private http: HttpClient) { 
    this.carList = new Array<Car>();
  }

  listCars(carType: string){
    const params = new HttpParams().set("type", carType);
    const backendURL = 'http://localhost:8080/car-listing/by-type';

    console.log(params);

    this.http.get<Array<Car>>(backendURL, {params: params}).subscribe(
      (resultado : any) => {
        console.log(resultado);
        for(let i = 0; i < resultado.length; i++){
          this.carList.push(resultado[i]);
        }        
      }
    );   
    return this.carList;
  }
}

// MOCKED DATA

//   listCarsNoRequest(carType: String){
//     this.carList = new Array<Car>();
//     let car = new Car();
//     car.carId = "1";
//     car.model = "BMW - ABC1234";
//     car.rent = 400;
//     car.make = "";
//     car.color = "White";
//     car.type = "Luxury";
//     car.transmission = "Automatic";
//     car.horsepower = "5";
//     car.acceleration = 100;
//     car.seats = 4;
//     car.trunk = 1;
//     car.consumption = 5;
//     this.carList.push(car);

//     let car2 = new Car();
//     car2.carId = "2";
//     car2.model = "Mercedez - 1234ABC";
//     car2.rent = 150;
//     car2.make = "";
//     car2.color = "Gold";
//     car2.type = "Economy";
//     car2.transmission = "Semi-Automatic";
//     car2.horsepower = "5";
//     car2.acceleration = 200;
//     car2.seats = 4;
//     car2.trunk = 2;
//     car2.consumption = 6;
//     this.carList.push(car2);

//     let car3 = new Car();
//     car3.carId = "3";
//     car3.model = "Toyota - AABBCC11223344";
//     car3.rent = 600;
//     car3.make = "";
//     car3.color = "Black";
//     car3.type = "Premium";
//     car3.transmission = "Manual";
//     car3.horsepower = "10";
//     car3.acceleration = 130;
//     car3.seats = 6;
//     car3.trunk = 1;
//     car3.consumption = 7;
//     this.carList.push(car3);

//     this.carList = this.carList.filter((obj) => {
//       return obj.type.toLocaleLowerCase() == carType;
//     });
//     return this.carList;
//   }
// }
