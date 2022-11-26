import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  constructor(private router: Router, private userRegisterService: UserRegisterService) {
  }

  ngOnInit(): void {
  }

  onSubmit(forms: any): void {
    let user = new User();
    user.email = forms.email;
    user.password = forms.password;
    this.userRegisterService.registerUser(user);
    this.router.navigate(['']);
    console.log("Usuário:");
    console.log(user);
    console.log("Está registrado:");
    console.log(this.userRegisterService.isRegistered(user));
  }
}
