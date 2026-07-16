import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  @Input() inputId!:string;
  @Input() label!:string;
  @Input() type!:string;
  value:string = "";
  @Input() placeholder!:string;
}
