import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinuppagePageRoutingModule } from './sinuppage-routing.module';

import { SinuppagePage } from './sinuppage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinuppagePageRoutingModule
  ],
  declarations: [SinuppagePage]
})
export class SinuppagePageModule {}
