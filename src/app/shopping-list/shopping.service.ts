import { Injectable } from '@angular/core';
import { ShoppingItem } from '../../shared/shopping-item.model';
import { Subject } from 'rxjs';
import { Product } from '../../shared/product.model';
import { ProductsService } from '../products/products.service';
import { NoticeMessagesService } from '../../shared/notice-messages.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingItems: ShoppingItem[] = [];
  itemsChanged = new Subject<number>();

  constructor(
    private productsService: ProductsService,
    private noticeMessagesService: NoticeMessagesService
  ) {
    this.shoppingItems.push(
      new ShoppingItem(productsService.productList[0], 5)
    );
  }

  addShoppingItem(product: Product, quantity: number) {
    const index = this.findProductIndex(product);
    this.noticeMessagesService.sendSuccessMessage(
      'Product successfully added to shopping cart!'
    );
    if (index >= 0) {
      this.shoppingItems[index].quantity += quantity;
    } else {
      const item = new ShoppingItem(product, quantity);
      this.shoppingItems.push(item);
      this.itemsChanged.next(this.shoppingItems.length);
    }
  }
  findProductIndex(product: Product) {
    return this.shoppingItems.findIndex(item => {
      return item.product === product;
    });
  }

  removeProductFromCart(product: Product) {
    this.shoppingItems = this.shoppingItems.filter(
      item => item.product !== product
    );
    this.noticeMessagesService.sendWarningMessage(
      'Product succesfully removed from shopping cart!'
    );
    this.itemsChanged.next(this.shoppingItems.length);
  }

  editItem(item: ShoppingItem, quantity: number) {
    const shoppingItem = this.shoppingItems.find(value => value === item);
    shoppingItem.quantity = quantity;
    this.noticeMessagesService.sendInfoMessage(
      `${shoppingItem.product.name} quantity successfully changed!`
    );
  }
}
