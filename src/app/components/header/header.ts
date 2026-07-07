import { Component,Output,EventEmitter,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router:Router = inject(Router);


  gotoHome(){
    this.router.navigate(['home'])
  }

  cadastrarNota(){
    console.log('cadastro de nota apertado!')
    this.router.navigate(['report_occurrence'])
  }

}
