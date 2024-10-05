import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

interface CartItem {
  product: {
    image: string;
    name: string;
    valor: string; 
  };
  quantity: number;
  subtotal?: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;  

  constructor(private cartService: CartService) {}

  ngOnInit() {
  
    this.cartItems = this.cartService.getCart();

    this.cartItems.forEach(item => {
      const valorNumerico = parseFloat(item.product.valor.replace(',', '.'));
      item.subtotal = valorNumerico * item.quantity;
    });

    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + (item.subtotal || 0), 0);
  }
}
