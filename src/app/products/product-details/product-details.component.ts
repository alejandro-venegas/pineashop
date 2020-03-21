import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
  product: Product;

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.product = this.productsService.getProductById(id);
  }

  addToCart(input) {
    console.log(input.value);
  }
}
