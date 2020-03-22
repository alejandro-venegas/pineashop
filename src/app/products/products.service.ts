import { Injectable, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';
import { Subject } from 'rxjs';

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
    ),
    new Product(
      'wqd4881d',
      'Baby Pineapple Costume',
      'https://ae01.alicdn.com/kf/HTB1UeGseAfb_uJkSmLyq6AxoXXar/Jane-Z-Ann-Baby-pineapple-costume-infant-toddler-photography-props-boys-girls-plushoutfits-3pcs-fruit-clothing.jpg',
      'Now you can have the two things you love the most together!',
      100,
      'Costumes'
    ),
    new Product(
      '1821dwq183',
      'Pineapple Body Lotion',
      'https://cdn.shopify.com/s/files/1/0034/5921/9520/products/Pineapple-and-Soymilk-lotion-Pricing-price-listing-image_800x.jpg?v=1553851274',
      'Yeah, we know you love pineapple so much that you would rub pineapple all over your body. Well, worry no more, this Pineapple Body Lotion will make your pineapple desires socially accepted to the eyes of the unworthy infidels!',
      30,
      'Health'
    )
  ];

  constructor() {}

  getProductById(id: string) {
    return this.productList.find(product => {
      return product.id === id;
    });
  }
  getCategories(productsArray: Product[]) {
    let categories = productsArray.map(product => product.category);
    categories = categories.filter(
      (product, index, array) => array.indexOf(product) === index
    );
    return categories;
  }
  getProductsByCategory(category: string) {
    return this.productList.filter(product => product.category === category);
  }
}
