import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatButtonModule} from '@angular/material/button'
import { MycardsPageRoutingModule } from './mycards-routing.module';

import { MycardsPage } from './mycards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycardsPageRoutingModule,
    MatButtonModule
  ],
  declarations: [MycardsPage]
})
export class MycardsPageModule {}
