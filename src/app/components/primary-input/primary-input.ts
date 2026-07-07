import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, ReactiveFormsModule, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-primary-input',
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.html',
  styleUrl: './primary-input.css',
  providers: [
    {
      // Isso diz ao Angular: "Ei, este componente funciona como um input de formulário!"
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInput),
      multi: true
    }
  ]
})
export class PrimaryInput implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() inputId: string = "";
  @Input() label: string = "";
  value:string = "";

  onChange:any = () => {
  }
  onTouched:any = () => {

  }

  writeValue(obj: any): void{
    this.value = obj;
  }

  registerOnChange(fn: any): void{
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void{
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void{}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);

  }

}
