import { Component, inject } from '@angular/core';
import { DefaultLogin } from "../../components/default-login/default-login";
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors, ɵInternalFormsSharedModule } from '@angular/forms';
import { PrimaryInput } from "../../components/primary-input/primary-input";
import { Router } from '@angular/router';
import { AuthUserService } from '../../services/auth-user-service';

// 1. A função que faz a comparação
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirm_password');

  if (!password || !confirmPassword) return null;

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }

  if (confirmPassword.hasError('passwordMismatch')) {
    const errors = { ...confirmPassword.errors };
    delete errors['passwordMismatch'];
    confirmPassword.setErrors(Object.keys(errors).length === 0 ? null : errors);
  }
  return null;
};

interface RegisterForm{
  username: FormControl<string | null>,
  email: FormControl<string | null>,
  password: FormControl<string | null>,
  confirm_password: FormControl<string | null>,
  registration: FormControl<string | null>
}

@Component({
  selector: 'app-signup',
  imports: [DefaultLogin, PrimaryInput, ɵInternalFormsSharedModule,ReactiveFormsModule],
  standalone:true,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  authService:AuthUserService = inject(AuthUserService);
  router:Router = inject(Router);
  registerForm!: FormGroup<RegisterForm>;

  constructor(){
    this.registerForm = new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirm_password: new FormControl('',[Validators.required]),
      registration: new FormControl('',[Validators.required,Validators.minLength(6)])

    })

  }

  submit(){

    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const registration = this.registerForm.value.registration;

    if (username && email && password && registration){
      this.authService.register(username,email,password,registration).subscribe({
        next: ()=> {
          console.log("Usuario cadastrado pode logar com ele")
          this.router.navigate(['login'])
        },
        error: (erro)=> {
          alert("Não foi possivel cadastrar: "+erro)
        }
      })
    }

  };

  navigate(){
    this.router.navigate(['login'])
  };



}
