import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SujetsPayesPageRoutingModule } from './sujets-payes-routing.module';

import { SujetsPayesPage } from './sujets-payes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SujetsPayesPageRoutingModule
  ],
  declarations: [SujetsPayesPage]
})
export class SujetsPayesPageModule {}
