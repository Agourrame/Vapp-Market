import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardinfoPage } from './cardinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CardinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardinfoPageRoutingModule {}
