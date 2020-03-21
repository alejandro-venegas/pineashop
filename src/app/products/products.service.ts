import { Injectable, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: Product[] = [
    new Product(
      '1a',
      'Pineapple Jacket',
      'http://artsadd-design-image.oss-accelerate.aliyuncs.com/EC2DB3661D5AEC11EE55546176CA11E7.jpg?x-oss-process=image/resize,w_500,h_500',
      'Ride with pride on a cold autumn morning with this pineapple jacket!',
      100,
      'Clothing'
    ),
    new Product(
      '1qw1wd',
      'Cubic Pineapple',
      'https://previews.123rf.com/images/franckito/franckito1211/franckito121100317/16393257-3d-rendering-of-a-cubic-shaped-pineapple.jpg',
      'Tired of the old-fashioned rounded pineapple? We got your back, pal! Picasso would be proud',
      5,
      'Edible'
    ),
    new Product(
      'awd18qw',
      'What-the-even-hell-is-this Pineapple',
      'https://i.redd.it/ag9322s2zkf01.jpg',
      "Just eat it before the blood moon... You don't wanna know...",
      50,
      'Edible'
    )
  ];

  constructor() {}

  getProductById(id: string) {
    return this.productList.find(product => {
      return product.id === id;
    });
  }
}
