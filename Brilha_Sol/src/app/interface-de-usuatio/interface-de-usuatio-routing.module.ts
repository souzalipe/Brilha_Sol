import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfaceDeUsuatioPage } from './interface-de-usuatio.page';

const routes: Routes = [
  {
    path: '',
    component: InterfaceDeUsuatioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfaceDeUsuatioPageRoutingModule {}
