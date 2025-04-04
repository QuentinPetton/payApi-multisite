import { Component } from '@angular/core';
import { EmailFormComponent } from '../../../shared/email-form/email-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [EmailFormComponent, RouterLink],
  templateUrl: './hero.component.html',
  styles: '',
})
export class HeroComponent {}
