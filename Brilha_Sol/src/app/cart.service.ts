import { Injectable } from '@angular/core';

// Definir a interface CartItem
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
  private cart: CartItem[] = []; // Matriz de itens no carrinho

  constructor() {}

  // Método para adicionar um produto ao carrinho
  addProduct(product: any, quantity: number) {
    const existingProduct = this.cart.find(item => item.product.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += quantity; // Atualiza a quantidade se o produto já estiver no carrinho
    } else {
      this.cart.push({ product, quantity }); // Adiciona o produto se ainda não estiver no carrinho
    }
  }

  // Retorna todos os itens no carrinho
  getCart(): CartItem[] {
    return this.cart;
  }

  // Calcula o valor total do carrinho
  getTotal(): number {
    return this.cart.reduce((total, item) => {
      const price = parseFloat(item.product.valor.replace(',', '.'));
      return total + (price * item.quantity);
    }, 0);
  }
}
