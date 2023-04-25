import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnciensSujetsPageRoutingModule } from './anciens-sujets-routing.module';

import { AnciensSujetsPage } from './anciens-sujets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnciensSujetsPageRoutingModule
  ],
  declarations: [AnciensSujetsPage]
})
export class AnciensSujetsPageModule {}
