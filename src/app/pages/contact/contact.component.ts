import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { EmailFormComponent } from '../../shared/email-form/email-form.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [FormComponent, EmailFormComponent],
  templateUrl: './contact.component.html',
  styles: ""
})
export class ContactComponent {

}
