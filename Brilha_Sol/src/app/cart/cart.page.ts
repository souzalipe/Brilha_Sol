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
      item.subtotal = this.calculateItemSubtotal(item);
    });
    this.calculateTotal();
  }

  updateQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.product, item.quantity);
    item.subtotal = this.calculateItemSubtotal(item); 
    this.calculateTotal();
  }

  
  calculateItemSubtotal(item: CartItem): number {
    const price = parseFloat(item.product.valor.replace(',', '.'));
    return price * item.quantity;
  }

 
  calculateTotal() {
    this.total = this.cartService.getTotal();
  }


  removeItem(item: CartItem) {
    this.cartService.removeProduct(item.product);
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

 
  closeModal() {
    this.modalController.dismiss();
  }
}
