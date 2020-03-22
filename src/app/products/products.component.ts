import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../../shared/product.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  uniqueCategories = [];
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.productList;
    this.uniqueCategories = this.productsService.getCategories(this.products);
    this.route.queryParams.subscribe((params: Params) => {
      if (params.category) {
        this.products = this.productsService.getProductsByCategory(
          params.category
        );
      }
    });
  }
}
