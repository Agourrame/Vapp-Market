import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycardsPage } from './mycards.page';

const routes: Routes = [
  {
    path: '',
    component: MycardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycardsPageRoutingModule {}
