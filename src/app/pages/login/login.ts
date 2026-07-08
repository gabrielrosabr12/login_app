import { Component,inject } from '@angular/core';
import {DefaultLogin} from '../../components/default-login/default-login';
import { PrimaryInput } from "../../components/primary-input/primary-input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthUserService } from '../../services/auth-user-service';
import { Router } from '@angular/router';

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
  router:Router = inject(Router);

  authService:AuthUserService = inject(AuthUserService);

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  submit(){
    console.log("Formulário enviado!");
    // Obter os valores do formulário
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email && password){
      this.authService.login(email,password).subscribe({
        next: ()=> {

          console.log("Tokens recebidos. Redirecionando para home", localStorage.getItem('acessToken'));
          this.router.navigate(['home']);
        },
        error: ()=> {
          alert("Email ou senha incorretos :");
        }
      });
    }

  }

  navigate(){
    console.log("Navegando para a página de cadastro!");
    this.router.navigate(['signup'])

  }

}
