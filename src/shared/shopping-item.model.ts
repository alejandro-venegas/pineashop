export class ShoppingItem {
  productId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  constructor(
    productId: string,
    productName: string,
    unitPrice: number,
    quantity: number
  ) {
    this.productId = productId;
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }
}
