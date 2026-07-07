import { Component, inject } from '@angular/core';
import { DefaultLogin } from "../../components/default-login/default-login";
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PrimaryInput } from "../../components/primary-input/primary-input";
import { Router } from '@angular/router';

interface RegisterForm{
  username: FormControl,
  email: FormControl,
  password: FormControl,
  confirm_password: FormControl,
  registration: FormControl
}

@Component({
  selector: 'app-signup',
  imports: [DefaultLogin, PrimaryInput],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  router:Router = inject(Router);
  registerForm!: FormGroup<RegisterForm>;

  constructor(){
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirm_password: new FormControl(),
      registration: new FormControl()

    })

  }
  submit(){};

  navigate(){
    this.router.navigate(['login'])
  };



}
