import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-pricing-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './pricing-card.component.html',
  styles: ""
})
export class PricingCardComponent {
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
  @Input() price: number | undefined = 0;
  @Input() features: {name:string; included:boolean}[] | undefined = [];
}
