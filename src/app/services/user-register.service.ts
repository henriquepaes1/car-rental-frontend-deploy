import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/user-model';

@Injectable({
  providedIn: 'root'
})

export class UserRegisterService {
  userList: User[];

  constructor(private http: HttpClient) { 
    this.userList = new Array<User>();
  }

  isRegistered(user: User){
    for(let i = 0; i < this.userList.length; i++){
      if(user.email == this.userList[i].email && user.password == this.userList[i].password){
        return true;
      }
    }
    return false;
  }

  registerUser(user: User){
    this.userList.push(user);
  }
}