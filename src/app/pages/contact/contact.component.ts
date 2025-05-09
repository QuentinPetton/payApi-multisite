import { afterNextRender, Component, inject } from '@angular/core';
import { FormComponent } from './form/form.component';
import { EmailFormComponent } from '../../shared/email-form/email-form.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormComponent, EmailFormComponent],
  templateUrl: './contact.component.html',
  styles: '',
})
export class ContactComponent {
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    afterNextRender(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
