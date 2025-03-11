import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BurgerMenuComponent } from '../../burger-menu/burger-menu.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [BurgerMenuComponent, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styles: ""
})
export class MainLayoutComponent {

}
