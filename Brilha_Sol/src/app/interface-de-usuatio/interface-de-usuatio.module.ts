import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfaceDeUsuatioPageRoutingModule } from './interface-de-usuatio-routing.module';

import { InterfaceDeUsuatioPage } from './interface-de-usuatio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfaceDeUsuatioPageRoutingModule
  ],
  declarations: [InterfaceDeUsuatioPage]
})
export class InterfaceDeUsuatioPageModule {}
