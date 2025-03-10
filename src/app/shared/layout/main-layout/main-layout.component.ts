import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BurgerMenuComponent } from '../../burger-menu/burger-menu.component';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [BurgerMenuComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styles: ""
})
export class MainLayoutComponent {

}
