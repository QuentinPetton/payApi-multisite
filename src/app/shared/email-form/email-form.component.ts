import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-email-form',
  imports: [ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styles: ""
})
export class EmailFormComponent {
  readonly emailSubmitForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get email() {
    return this.emailSubmitForm.get('email');
  }
  handleEmailFormSubmit() {
    if (this.emailSubmitForm.valid) {
      console.log(this.emailSubmitForm.value);
    }
  }
}
