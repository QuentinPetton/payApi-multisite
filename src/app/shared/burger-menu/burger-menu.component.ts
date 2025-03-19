import { Component, signal, Renderer2, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-burger-menu',
  imports: [RouterLink],
  templateUrl: './burger-menu.component.html',
  styles: ""
})
export class BurgerMenuComponent {
isActive = signal(false);
private renderer = inject(Renderer2);

handleBurgerClick() {
  this.isActive.set(!this.isActive());
  if (this.isActive()) {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  } else {
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
closeBurgerWhenLinkClicked() {
  this.isActive.set(false);
  this.renderer.removeStyle(document.body, 'overflow');
}
}
