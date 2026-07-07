import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable,tap } from 'rxjs';

interface Token {
  accessToken: string,
  refreshToken: string
}

@Service()
export class AuthUserService {
  http : HttpClient = inject(HttpClient);
  private readonly urlLogin: string = "http://localhost:8080/auth/login";


  login(username: string, password:string): any{

    this.http.post<Token>(this.urlLogin,
      {
        username:username, password:password
      },).pipe(tap({
          next: (data: Token) => {
            console.log('Login efetuado com sucesso!', data);
            // Salvar no localStorage
          },
          error: (error) => {
            console.error('Falha de autenticação', error);
          }
        })
      );
  }

}
