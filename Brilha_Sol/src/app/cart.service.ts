import { Injectable } from '@angular/core';


interface CartItem {
  product: {
    image: string;
    name: string;
    valor: string;
  };
  quantity: number;
}

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
    } else {
      this.cart.push({ product, quantity });
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => {
      const price = parseFloat(item.product.valor.replace(',', '.'));
      return total + (price * item.quantity);
    }, 0);
  }
}
