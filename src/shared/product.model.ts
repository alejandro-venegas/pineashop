export class Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;

  constructor(
    id: string,
    name: string,
    imgUrl: string,
    description: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imgUrl;
    this.description = description;
    this.price = price;
  }
}
