import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styles: ""
})
export class FormComponent {

  readonly submitForm =  new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    companyName: new FormControl(''),
    title: new FormControl(''),
    message: new FormControl('')
  })
  onSubmit() {
    console.log(this.submitForm.value);
  }
};

