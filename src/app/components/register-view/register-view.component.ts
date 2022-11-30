import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(forms: any): void {
    // Get accounts registered from local storage
    let userArray = JSON.parse(localStorage.getItem('userArray') || '{}');
    let isEmpty = Object.keys(userArray).length === 0;
    if(isEmpty) userArray = new Array<User>();

    // Verify if the account is already registered and if not register it
    let user = new User();
    user.email = forms.email;
    user.password = forms.password;
    
    let isRegistered = false;
    for(let i = 0; i < userArray.length; i++){
      if(user.email == userArray[i].email && user.password == userArray[i].password){
        isRegistered = true;
      }
    }
    
    if(isRegistered == false && user.email != "" && user.password != ""){
      userArray.push(user);
      this.router.navigate(['']);
      localStorage.setItem('userArray', JSON.stringify(userArray));
    }
    else if(isRegistered) alert("This email address is already in use");
    else alert("Please inform a valid email address and password to register");
  }
}
