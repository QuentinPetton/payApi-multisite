import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PartnerComponent } from './partner/partner.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroComponent, PartnerComponent],
  templateUrl: './home.component.html',
  styles: ""
})
export class HomeComponent {

}
