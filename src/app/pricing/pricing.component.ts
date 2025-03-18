import { Component } from '@angular/core';
import { PricingCardComponent } from '../shared/pricing-card/pricing-card.component';
import { EmailFormComponent } from '../shared/email-form/email-form.component';

@Component({
  standalone: true,
  selector: 'app-pricing',
  imports: [PricingCardComponent, EmailFormComponent],
  templateUrl: './pricing.component.html',
  styles: ""
})
export class PricingComponent {

}
