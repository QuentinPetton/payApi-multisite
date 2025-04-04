import { afterNextRender, Component, inject } from '@angular/core';
import { PricingCardComponent } from '../shared/pricing-card/pricing-card.component';
import { EmailFormComponent } from '../shared/email-form/email-form.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [PricingCardComponent, EmailFormComponent],
  templateUrl: './pricing.component.html',
  styles: '',
})
export class PricingComponent {
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    afterNextRender(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
