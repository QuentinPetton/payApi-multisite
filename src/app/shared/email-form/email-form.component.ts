import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';





@Component({
  selector: 'app-email-form',
  imports: [ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styles: ""
})
export class EmailFormComponent {

  emailSent = signal(false);

  readonly emailSubmitForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get email() {
    return this.emailSubmitForm.get('email');
  }
  handleEmailFormSubmit() {
    if (this.emailSubmitForm.valid) {
      console.log(this.emailSubmitForm.value);
      this.emailSent.set(true);
      this.emailSubmitForm.reset();
    }
  }
}
