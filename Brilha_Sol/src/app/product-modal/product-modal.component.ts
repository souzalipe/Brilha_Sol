import { Component, Input, OnInit } from '@angular/core';  
import { ModalController } from '@ionic/angular';         
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {

  @Input() product: any;  
  quantity: number = 1;

  constructor(private modalController: ModalController, private cartService: CartService) {}

  ngOnInit() {
    
  }

  closeModal() {
    this.modalController.dismiss();
  }

  addToCart() {
    this.cartService.addProduct(this.product, this.quantity);
    this.closeModal();
  }
}
