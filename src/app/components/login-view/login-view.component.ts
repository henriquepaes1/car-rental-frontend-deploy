import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { UserRegisterService } from 'src/app/services/user-register.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  userRegisterService: UserRegisterService;

  constructor(registerService: UserRegisterService) { 
    this.userRegisterService = registerService;
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
      console.log("Usuario registrado");
      if(admin == true) {
        console.log("Usuario administrador");
        window.location.href = '/car-registration';
      }
      else window.location.href = '/data_gathering';
      console.log("Usuario não-admnistrador");
    }
    console.log(user);
  }
}
