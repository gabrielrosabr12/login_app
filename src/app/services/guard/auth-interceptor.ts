import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUserService } from '../auth-user-service';

@Service()
export class AuthInterceptor implements HttpInterceptor {

  authService: AuthUserService = inject(AuthUserService);


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    console.log('Interceptando URL: ' + req.url);

    // Se o token existir, nós clonamos a requisição original e adicionamos o cabeçalho
    if (token) {
      console.log("Usuário autenticado, anexando token...");
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Formato padrão esperado pelo Spring Security
        }
      });

      // Enviamos a requisição clonada (com o token) para o backend
      return next.handle(clonedReq);
    }

    // Se NÃO houver token (ex: requisição de login ou cadastro), apenas deixa a requisição passar normalmente
    console.log("Sem token, requisição seguindo normalmente...");
    return next.handle(req);
  }
}
