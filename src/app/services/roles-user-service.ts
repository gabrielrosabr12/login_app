import { AuthUserService } from './auth-user-service';
import { inject, Service } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface TokenDecodificado{
  iss:string,
  sub:string,
  role:string[],
  exp:number,
  type:string,
  iat:number
}

@Service()
export class RolesUserService {
  authUserService:AuthUserService = inject(AuthUserService);

// Correção: O tipo de retorno ideal aqui é um array de strings
  getRole(): string[] {
    const rolesSalvas = localStorage.getItem('roles');

    // Se as roles já existem e não são nulas, convertemos a string de volta para Array
    if (rolesSalvas && rolesSalvas !== 'null') {
      return JSON.parse(rolesSalvas);
    }

    const token = this.authUserService.getToken();

    if (token && token !== 'null') {
      try {
        const tokenDecodificado: TokenDecodificado = jwtDecode(token);

        // Salvamos no localStorage como string (Correto!)
        localStorage.setItem('roles', JSON.stringify(tokenDecodificado.role));

        // Retornamos o array diretamente do objeto decodificado (mais performático)
        return tokenDecodificado.role;

      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }

    // Fallback: Se não encontrou nada ou deu erro, retorna um array vazio.
    // Isso evita quebras no resto da aplicação ao tentar usar métodos como .length ou .map()
    return [];
  }
}
