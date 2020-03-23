import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/product.model';
import { ProductsService } from '../products.service';
import { ShoppingItem } from '../../../shared/shopping-item.model';
import { ShoppingService } from '../../shopping-list/shopping.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute
  ) {}
  product: Product;
  isAdded: boolean;

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.product = this.productsService.getProductById(id);
    this.isAdded = this.shoppingService.findProductIndex(this.product) >= 0;
  }

  addToCart(quantity) {
    // tslint:disable-next-line:radix
    this.shoppingService.addShoppingItem(this.product, parseInt(quantity));
    this.isAdded = true;
  }

  onRemoveFromCart() {
    this.shoppingService.removeProductFromCart(this.product);
    this.isAdded = false;
  }
}
