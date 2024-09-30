import { Component, Input, OnInit } from '@angular/core';  // Verifique o import de @Input
import { ModalController } from '@ionic/angular';          // Import correto do ModalController
import { CartService } from '../cart.service'; // Certifique-se de que o caminho esteja correto

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {

  @Input() product: any;  // Produto recebido da página principal
  quantity: number = 1;

  constructor(private modalController: ModalController, private cartService: CartService) {}

  ngOnInit() {
    // Inicialização se necessário
  }

  closeModal() {
    this.modalController.dismiss();
  }

  addToCart() {
    this.cartService.addProduct(this.product, this.quantity);
    this.closeModal();
  }
}
