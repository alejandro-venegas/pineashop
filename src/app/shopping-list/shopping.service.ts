import { Injectable } from '@angular/core';
import { ShoppingItem } from '../../shared/shopping-item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingItems: ShoppingItem[] = [];
  itemsChanged = new Subject<number>();
  constructor() {}

  addShoppingItem(item: ShoppingItem) {
    this.shoppingItems.push(item);
    this.itemsChanged.next(this.shoppingItems.length);
  }
}
