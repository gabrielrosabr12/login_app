import { Component,inject } from '@angular/core';
import {DefaultLogin} from '../../components/default-login/default-login';
import { PrimaryInput } from "../../components/primary-input/primary-input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthUserService } from '../../services/auth-user-service';

interface LoginForm {
  email: FormControl,
  password: FormControl;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLogin, PrimaryInput, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup<LoginForm>;

  authService:AuthUserService = inject(AuthUserService);

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]{3}\.,\d{2}[a-z]{4}')])
    })
  }

  submit(){
    console.log("Formulário enviado!");
    console.log(this.authService.login(this.loginForm.value.email,this.loginForm.value.password));
  }

  navigate(){
    console.log("Navegando para a página de cadastro!");
  }

}
