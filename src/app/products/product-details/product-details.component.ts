import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/product.model';
import { ProductsService } from '../products.service';
import { ShoppingItem } from '../../../shared/shopping-item.model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  isAdded: boolean;
  @ViewChild('form') form: NgForm;
  constructor(
    private productsService: ProductsService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.product = this.productsService.getProductById(id);
    this.isAdded = this.shoppingService.findProductIndex(this.product) >= 0;
  }

  addToCart() {
    // tslint:disable-next-line:radix
    console.log(this.form);
    // this.shoppingService.addShoppingItem(this.product, parseInt(quantity));
    // this.isAdded = true;
  }

  onRemoveFromCart() {
    this.shoppingService.removeProductFromCart(this.product);
    this.isAdded = false;
  }
}
