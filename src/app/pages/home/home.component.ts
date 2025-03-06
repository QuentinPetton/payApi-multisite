import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styles: ""
})
export class HomeComponent {

}
