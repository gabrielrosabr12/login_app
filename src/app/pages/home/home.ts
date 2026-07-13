import { Component, OnInit,inject } from '@angular/core';
import { Header } from "../../components/header/header";
import { RolesUserService } from '../../services/roles-user-service';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  rolesService: RolesUserService = inject(RolesUserService);
  role!:string[];

  ngOnInit(){
    this.role = this.rolesService.getRole();
  }

}
