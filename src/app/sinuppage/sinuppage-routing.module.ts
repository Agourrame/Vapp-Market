import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinuppagePage } from './sinuppage.page';

const routes: Routes = [
  {
    path: '',
    component: SinuppagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinuppagePageRoutingModule {}
