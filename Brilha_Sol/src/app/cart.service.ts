import { Injectable } from '@angular/core';

// Definir a interface CartItem fora da classe CartService
interface CartItem {
  product: any;  // O tipo pode ser mais específico se necessário
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Definir o array cart com o tipo correto
  private cart: CartItem[] = [];

  constructor() { }

  // Método para adicionar produtos ao carrinho
  addProduct(product: any, quantity: number) {
    // Verifica se o produto já existe no carrinho
    const existingProduct = this.cart.find(item => item.product.name === product.name);

    if (existingProduct) {
      // Se o produto já existe, apenas atualiza a quantidade
      existingProduct.quantity += quantity;
    } else {
      // Se o produto não existe, adiciona um novo item
      this.cart.push({ product, quantity });  // Corrigido para usar o tipo CartItem
    }
  }

  // Método para obter todos os produtos no carrinho
  getCart() {
    return this.cart;
  }

  // Método para calcular o valor total do carrinho
  getTotal() {
    return this.cart.reduce((total, item) => {
      const price = parseFloat(item.product.valor.replace(',', '.')); // Substitui a vírgula para fazer o cálculo
      if (!isNaN(price)) {  // Adiciona uma verificação para garantir que o valor é numérico
        return total + (price * item.quantity);
      }
      return total; // Retorna o total mesmo se o valor for inválido
    }, 0);
  }
}
