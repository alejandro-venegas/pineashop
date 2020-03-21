export class Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  category: string;

  constructor(
    id: string,
    name: string,
    imgUrl: string,
    description: string,
    price: number,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imgUrl;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}
