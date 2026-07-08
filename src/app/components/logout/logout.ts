import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: '<p>Saindo do sistema...</p>' // Uma mensagem rápida enquanto redireciona
})
export class Logout implements OnInit { // 1. Implementa o OnInit
  router: Router = inject(Router);

  // O constructor fica vazio (ou apenas com injeções)
  constructor() {}

  // 2. A lógica vai para o ngOnInit
  ngOnInit() {
    console.log("Limpando dados e saindo...");
    localStorage.clear(); // Ou localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  }
}
