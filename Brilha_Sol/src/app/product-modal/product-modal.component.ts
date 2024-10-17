import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
})
export class ProductModalComponent {
  @Input() product: any; 
  quantity: number = 1; 

  constructor(
    private modalController: ModalController,
    private cartService: CartService 
  ) {}


  closeModal() {
    this.modalController.dismiss();
  }


  addToCart() {
    this.cartService.addProduct(this.product, this.quantity); 
    this.closeModal(); 
  }
}
