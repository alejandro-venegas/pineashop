import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { ShoppingService } from './shopping-list/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('shoppingCart', { static: true }) shoppingCartEl: ElementRef;
  title = 'Pineashop';
  shoppingCart = faShoppingCart;
  shoppingCounter: number = 0;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.shoppingCounter = this.shoppingService.shoppingItems.length;
    this.shoppingService.itemsChanged.subscribe(counter => {
      this.shoppingCounter = counter;
    });
  }
}
