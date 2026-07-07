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

    return this.http.post<Token>(this.urlLogin,
      {
        username:username, password:password
      },).pipe(tap({
          next: (data: Token) => {
            // Salvar no localStorage

            if( data.accessToken && data.refreshToken){
              localStorage.setItem('acessToken',data.accessToken);
              localStorage.setItem('refreshToken',data.refreshToken);
            }
          },
          error: (error) => {
            console.error('Falha de autenticação', error);
          }
        })
      );
  }

}
