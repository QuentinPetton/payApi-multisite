import { ViewportScroller } from '@angular/common';
import { afterNextRender, Component, inject } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PartnerComponent } from './partner/partner.component';
import { FeaturesComponent } from './features/features.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroComponent, PartnerComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styles: '',
})
export class HomeComponent {
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    afterNextRender(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
