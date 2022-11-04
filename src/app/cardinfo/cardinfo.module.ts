import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import { IonicModule } from '@ionic/angular';

import { CardinfoPageRoutingModule } from './cardinfo-routing.module';

import { CardinfoPage } from './cardinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardinfoPageRoutingModule,
    MatButtonModule
  ],
  declarations: [CardinfoPage]
})
export class CardinfoPageModule {}
