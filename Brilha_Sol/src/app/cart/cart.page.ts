import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ModalController } from '@ionic/angular';

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
  total = 0;

  constructor(
    private cartService: CartService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
  
    this.cartItems = this.cartService.getCart();


    this.cartItems.forEach(item => {
      const valorNumerico = parseFloat(item.product.valor.replace(',', '.'));
      item.subtotal = valorNumerico * item.quantity;
    });


    this.calculateTotal();
  }

  
  updateQuantity(item: CartItem) {
    const valorNumerico = parseFloat(item.product.valor.replace(',', '.'));
    item.subtotal = valorNumerico * item.quantity; 
    this.calculateTotal(); 
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + (item.subtotal || 0), 0);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
