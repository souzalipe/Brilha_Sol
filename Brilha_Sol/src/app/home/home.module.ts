import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { ProductModalComponent } from '../product-modal/product-modal.component';
import { CartService } from '../cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
   
    ProductModalComponent 
  ],
  providers: [
    CartService 
  ]
})
export class HomePageModule {}
