import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Form } from "../../components/report_ocorrency/form/form";
import { DefaultReportOcorrency } from "../../components/report_ocorrency/default-report-ocorrency/default-report-ocorrency";

@Component({
  selector: 'app-report-occurrence',
  imports: [Header, ReactiveFormsModule, Form, DefaultReportOcorrency],
  templateUrl: './report-occurrence.html',
  styleUrl: './report-occurrence.css',
})
export class ReportOccurrence {
  title = '';
  description = '';
  files: File[] = [];

  onFilesChange(newFiles: File[]){
    this.files = newFiles;
  }

  reportForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    files: new FormControl([])
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log({
      title: this.title,
      description: this.description,
      files: this.files
    });
  }
}
