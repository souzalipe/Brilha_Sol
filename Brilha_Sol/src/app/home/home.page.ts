import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'; 
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { CartPage } from '../cart/cart.page'; 

interface Product {
  name: string;
  valor: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  plants: Product[] = [
    { name: 'Placa Solar Painel Solar 150w + Manual', valor: "375,10", image: '../../assets/placa.png' },
    { name: 'Kit Painel Placa Energia Solar 2x155w Caminhão 12ou24 Volts Cor Azul Voltagem De Circuito Aberto 24.46v Voltagem Máxima Do Sistema 20.64v', valor: "875,00", image: '../../assets/placa2.png' },
    { name: 'Kit Sistema Solar Painel Led A Bateria + 3 Lampadas Portatil', valor: "175,75", image: '../../assets/placa3.png' },
    { name: 'Painel solar portátil Ecoflow 110W', valor: "1.123,30", image: '../../assets/placa4.png' }, 
    { name: 'Painel Solar Ezviz D 7.2v 4,2w Para Câmera Externa A Bateria', valor: "195,70", image: '../../assets/placa5.png' },
    { name: 'String Box Clamper 4 Entradas / 4 Saídas', valor: "2.094,00", image: '../../assets/placa6.webp' }, 
    { name: 'Estação Solar Portátil Autônoma 3 Lâmpadas E Carregamento', valor: "259,90", image: '../../assets/placa7.webp' },
    { name: 'Painel Solar 12v 20w Policristalino Fotovoltaico (placa)', valor: "149,99", image: '../../assets/placa8.webp' }
  ];

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController 
  ) {}

  async openProductModal(product: Product) { 
    const modal = await this.modalController.create({
      component: ProductModalComponent,
      componentProps: { product }
    });
    return await modal.present();
  }

  async openCartModal() {
    const modal = await this.modalController.create({
      component: CartPage 
    });
    return await modal.present();
  }


  goToUserPage() {
    this.navCtrl.navigateForward('/interface-de-usuatio'); 
  }
}
