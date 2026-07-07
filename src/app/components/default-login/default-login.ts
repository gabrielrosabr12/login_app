import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-default-login',
  standalone:true,
  imports: [],
  templateUrl: './default-login.html',
  styleUrl: './default-login.css',
})
export class DefaultLogin {
  capaImg: string = "login/capa-login.svg";
  altImg: string = "login logo";
  srcImg: string = "login/icon-login1.png";
  @Input() title:string = "";
  @Input() primaryBtnText:string = "";
  @Input() secondaryBtnText:string= "";
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();
  @Input() disablePrimaryBtn: boolean = true;


  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }

}
