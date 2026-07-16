import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() valueChange = new EventEmitter<string>();

  onInput(event:Event){
    const input = event.target as HTMLInputElement;
    this.value =input.value;
    this.valueChange.emit(this.value);
  }
}
