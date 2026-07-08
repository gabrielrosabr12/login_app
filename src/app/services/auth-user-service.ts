import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable,tap } from 'rxjs';

interface Token {
  acessToken: string,
  refreshToken: string
}

@Service()
export class AuthUserService {
  http : HttpClient = inject(HttpClient);
  private readonly urlLogin: string = "http://localhost:8080/auth/login";

  getToken(): string | null{
    return localStorage.getItem('acessToken');
  }


  login(username: string, password:string): any{
    console.log('tentando loginho');
    return this.http.post<Token>(this.urlLogin,
      {
        username:username, password:password
      },).pipe(tap({
          next: (data: Token) => {
            // Salvar no localStorage
            if( data.acessToken && data.refreshToken){

              localStorage.setItem('acessToken',data.acessToken);
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
