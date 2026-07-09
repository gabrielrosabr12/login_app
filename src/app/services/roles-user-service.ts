import { AuthUserService } from './auth-user-service';
import { inject, Service } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface TokenDecodificado{

}

@Service()
export class RolesUserService {
  authUserService:AuthUserService = inject(AuthUserService);

  getRole(){
    const token = this.authUserService.getToken();

    if(token && token != null && token != 'null'){
      try{
        const tokenDecodificado:any = jwtDecode(token);
        localStorage.setItem('roles',tokenDecodificado.role);
      } catch(error){

      }


    }

  }






}
