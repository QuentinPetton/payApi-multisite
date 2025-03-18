import { Component } from '@angular/core';
import { EmailFormComponent } from '../../../shared/email-form/email-form.component';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [EmailFormComponent],
  templateUrl: './hero.component.html',
  styles: ""
})
export class HeroComponent {

}
