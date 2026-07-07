import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  router:Router = inject(Router)

  constructor(){
    localStorage.clear();
    this.router.navigate(['login']);
  }


}
