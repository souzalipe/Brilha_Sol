import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular'; // Certifique-se de importar o ModalController e ToastController
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { CartPage } from '../cart/cart.page';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


interface Product {
  name: string;
  valor: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  plants: Product[] = [
    { name: 'Placa Solar Painel Solar 150w + Manual', valor: "149,90", image: '../../assets/placa.png', link:"https://mpago.la/1YXTHmy" },
    { name: 'Kit Painel Placa Energia Solar 2x155w Caminhão 12ou24 Volts Cor Azul Voltagem De Circuito Aberto 24.46v', valor: "875,00", image: '../../assets/placa2.png',link:"https://mpago.la/2vm2Erk" },
    { name: 'Kit Sistema Solar Painel Led A Bateria + 3 Lampadas Portatil', valor: "175,50", image: '../../assets/placa3.png',link:"https://mpago.la/1VhjyNm" },
    { name: 'Painel solar portátil Ecoflow 110W', valor: "149,90", image: '../../assets/placa4.png',link:"https://mpago.la/2pzdsdm"},
    { name: 'Painel Solar Ezviz D 7.2v 4,2w Para Câmera Externa A Bateria', valor: "149,90", image: '../../assets/placa5.png',link:"https://mpago.la/1LJ1pap" },
    { name: 'String Box Clamper 4 Entradas / 4 Saídas', valor: "149,90", image: '../../assets/placa6.webp',link:"https://mpago.la/2fEpYs1" },
    { name: 'Estação Solar Portátil Autônoma 3 Lâmpadas E Carregamento', valor: "149,90", image: '../../assets/placa7.webp',link: "https://mpago.la/2aTTJ2B"},
    { name: 'Painel Solar 12v 20w Policristalino Fotovoltaico (placa)', valor: "149,90", image: '../../assets/placa8.webp', link:"https://mpago.la/28P14uN"}
  ];

  constructor(
    private modalController: ModalController, 
    private toastController: ToastController, 
    private cartService: CartService, 
    private router: Router 
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
  logout() {
 
    localStorage.clear();
    sessionStorage.clear();

    this.router.navigate(['/login']);
  }
  async openMap() {
  
    const toast = await this.toastController.create({
      message: 'Carregando...',
      duration: 3000, 
      position: 'bottom'
    });
    toast.present();

    setTimeout(() => {
      const latitude = -23.55052; 
      const longitude = -46.633308;
      const url = `https://www.google.com/maps/search/Painel+Solar/@${latitude},${longitude},15z`;
      window.open(url, '_blank'); 
    }, 3000);
  }
}
