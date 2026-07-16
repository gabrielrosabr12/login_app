import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Form } from "../../components/report_ocorrency/form/form";

@Component({
  selector: 'app-report-occurrence',
  imports: [Header, ReactiveFormsModule, Form],
  templateUrl: './report-occurrence.html',
  styleUrl: './report-occurrence.css',
})
export class ReportOccurrence {
  textInput = new FormControl('');

  onPress(){
    console.log(this.textInput.value)
  }
}
