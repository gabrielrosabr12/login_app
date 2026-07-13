import { Component,Output,EventEmitter,inject,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesUserService } from '../../services/roles-user-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  router:Router = inject(Router);
  rolesService: RolesUserService = inject(RolesUserService);
  @Input() role!:string[];


  ngOnInit(): void {
    this.role = this.rolesService.getRole();
  }

  gotoHome(){
    this.router.navigate(['home'])
  }

  cadastrarNota(){
    console.log('cadastro de nota apertado!')
    this.router.navigate(['report_occurrence'])
  }

  logout(){
    this.router.navigate(['logout'])
  }

}
