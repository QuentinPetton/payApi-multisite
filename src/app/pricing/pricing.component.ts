import { Component } from '@angular/core';
import { PricingCardComponent } from '../shared/pricing-card/pricing-card.component';

@Component({
  standalone: true,
  selector: 'app-pricing',
  imports: [PricingCardComponent],
  templateUrl: './pricing.component.html',
  styles: ""
})
export class PricingComponent {

}
