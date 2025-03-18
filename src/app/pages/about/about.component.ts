import { Component } from '@angular/core';
import { EmailFormComponent } from '../../shared/email-form/email-form.component';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [EmailFormComponent],
  templateUrl: './about.component.html',
  styles: ""
})
export class AboutComponent {

}
