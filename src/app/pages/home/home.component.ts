import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PartnerComponent } from './partner/partner.component';
import { FeaturesComponent } from './features/features.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroComponent, PartnerComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styles: ""
})
export class HomeComponent {

}
