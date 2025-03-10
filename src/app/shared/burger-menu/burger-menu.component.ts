import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-burger-menu',
  imports: [],
  templateUrl: './burger-menu.component.html',
  styles: ""
})
export class BurgerMenuComponent {
isActive = signal(false);

handleBurgerClick() {
  this.isActive.set(!this.isActive());
  console.log('Burger menu clicked');
}
}
