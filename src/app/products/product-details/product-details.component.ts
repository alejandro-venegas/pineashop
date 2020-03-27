import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../shared/product.model';
import { ProductsService } from '../products.service';
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
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.product = this.productsService.getProductById(id);
    this.isAdded = this.shoppingService.findProductIndex(this.product) >= 0;
  }

  addToCart() {
    this.form.control.markAllAsTouched();
    if (this.form.valid) {
      this.shoppingService.addShoppingItem(
        this.product,
        this.form.value.quantity
      );
      this.isAdded = true;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  onRemoveFromCart() {
    this.shoppingService.removeProductFromCart(this.product);
    this.isAdded = false;
  }
}
