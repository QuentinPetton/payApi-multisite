import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form.component.html',
  styles: ""
})
export class FormComponent {

  readonly submitForm =  new FormGroup({
    name: new FormControl('', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z ]+$')
    ]),
    email: new FormControl('', [Validators.required,
      Validators.email,
    ]),
    companyName: new FormControl(''),
    title: new FormControl(''),
    message: new FormControl(''),
    terms: new FormControl(false, Validators.requiredTrue)
  })
  onSubmit() {
    console.log(this.submitForm.value);
  }
  get name(){
    return this.submitForm.get('name') as FormControl;
  }
};

