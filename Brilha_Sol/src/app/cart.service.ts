import { Injectable } from '@angular/core';

interface CartItem {
  product: {
    image: string;
    name: string;
    valor: string;
  };
  quantity: number;
  subtotal?: number; }

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() {}

  addProduct(product: any, quantity: number) {
    const existingProduct = this.cart.find(item => item.product.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += quantity;
      existingProduct.subtotal = this.calculateItemSubtotal(existingProduct); 
    } else {
      const newItem: CartItem = {
        product,
        quantity,
        subtotal: this.calculateItemSubtotal({ product, quantity })
      };
      this.cart.push(newItem);
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  updateQuantity(product: any, quantity: number) {
    const item = this.cart.find(item => item.product.name === product.name);
    if (item) {
      item.quantity = quantity;
      item.subtotal = this.calculateItemSubtotal(item); 
    }
  }


  removeProduct(product: any) {
    this.cart = this.cart.filter(item => item.product.name !== product.name);
  }


  getTotal(): number {
    return this.cart.reduce((total, item) => total + (item.subtotal || 0), 0);
  }


  private calculateItemSubtotal(item: CartItem): number {
    const price = parseFloat(item.product.valor.replace(',', '.'));
    return price * item.quantity;
  }
}
