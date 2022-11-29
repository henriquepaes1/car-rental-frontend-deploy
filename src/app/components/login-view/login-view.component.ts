import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(forms: any){
    console.log('a');
    console.log(localStorage.getItem('userArray'));
    // Get accounts registered from local storage
    let userArray = JSON.parse(localStorage.getItem('userArray') || '{}');
    let isEmpty = Object.keys(userArray).length === 0;
    if(isEmpty) userArray = new Array<User>();
    
    // Verify if user is registered and navigate to apropriate path
    let user = new User();
    let admin;
    user.email = forms.email;
    user.password = forms.password;
    if(forms.email == "gabrielpalassi@hotmail.com" || forms.email == "admin") admin = true;
    else admin = false;
    let isRegistered = false;
    for(let i = 0; i < userArray.length; i++){
      if(user.email == userArray[i].email && user.password == userArray[i].password){
        isRegistered = true;
      }
    }
    if(isRegistered){
      if(admin == true) {
        this.router.navigate(['/car-registration']);
      }
      else this.router.navigate(['/data_gathering']).then(() => {window.location.reload();});
    }
    else alert("Invalid username/password");
  }
}
