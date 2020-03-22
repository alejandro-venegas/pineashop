import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  uniqueCategories = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.productList;
    this.uniqueCategories = this.products.map(product => product.category);
    this.uniqueCategories = this.uniqueCategories.filter(
      (product, index, array) => array.indexOf(product) === index
    );
  }
}
