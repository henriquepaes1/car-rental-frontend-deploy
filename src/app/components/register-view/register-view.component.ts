import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { UserRegisterService } from 'src/app/services/user-register.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {
  userRegisterService: UserRegisterService;

  constructor(registerService: UserRegisterService) { 
    this.userRegisterService = registerService;
  }

  ngOnInit(): void {
  }

  onSubmit(forms: any): void {
    let user = new User();
    user.email = forms.email;
    user.password = forms.password;
    this.userRegisterService.registerUser(user);
    window.location.href = '';
  }
}
