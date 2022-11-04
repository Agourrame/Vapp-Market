import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatButtonModule} from '@angular/material/button'
import { MoreinfoPageRoutingModule } from './moreinfo-routing.module';

import { MoreinfoPage } from './moreinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreinfoPageRoutingModule,
    MatButtonModule
  ],
  declarations: [MoreinfoPage]
})
export class MoreinfoPageModule {}
