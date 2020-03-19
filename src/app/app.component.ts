import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pineashop';
  shoppingCart = faShoppingCart;
}
