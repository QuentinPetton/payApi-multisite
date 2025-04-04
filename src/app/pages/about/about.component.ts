import { afterNextRender, Component, inject } from '@angular/core';
import { EmailFormComponent } from '../../shared/email-form/email-form.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [EmailFormComponent],
  templateUrl: './about.component.html',
  styles: '',
})
export class AboutComponent {
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    afterNextRender(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
