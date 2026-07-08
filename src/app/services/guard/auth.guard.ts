import { inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from "@angular/router";
import { AuthUserService } from '../auth-user-service';

export const authGuard : CanActivateFn = () => {
  const router:Router = inject(Router);
  const authService:AuthUserService = inject(AuthUserService);

  const token = authService.getToken();

  // Atenção aqui: às vezes o localStorage salva a palavra "null" como texto!
  if (token && token !== 'null' && token !== 'undefined') {

    return true; // Tem token válido, deixa entrar na rota!
  } else {
    console.log("Acesso negado: Redirecionando para o login",token);
    router.navigate(['login']); // Expulsa de volta para a tela de login
    return false; // Bloqueia a renderização do componente Home
  }
}
