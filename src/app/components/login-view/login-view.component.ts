import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(private router: Router, private userRegisterService: UserRegisterService) {
  }

  ngOnInit(): void {
  }

  onSubmit(forms: any){
    let user = new User();
    let admin;
    user.email = forms.email;
    user.password = forms.password;
    if(forms.email == "gabrielpalassi@hotmail.com" || forms.email == "teste") admin = true;
    else admin = false;
    if(this.userRegisterService.isRegistered(user)){
      if(admin == true) {
        this.router.navigate(['/car-registration']);
      }
      else this.router.navigate(['/data_gathering']);
    }
  }
}
