import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../cart.service'; // Importa o serviço de carrinho

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
})
export class ProductModalComponent {
  @Input() product: any; // Recebe o produto do componente pai
  quantity: number = 1;  // Quantidade inicial

  constructor(
    private modalController: ModalController,
    private cartService: CartService // Injeta o serviço de carrinho
  ) {}

  // Fechar modal
  closeModal() {
    this.modalController.dismiss();
  }

  // Adicionar produto ao carrinho
  addToCart() {
    this.cartService.addProduct(this.product, this.quantity); // Adiciona o produto ao carrinho
    this.closeModal(); // Fecha o modal após adicionar ao carrinho
  }
}
