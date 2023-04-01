import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SujetsNonPayesPageRoutingModule } from './sujets-non-payes-routing.module';

import { SujetsNonPayesPage } from './sujets-non-payes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SujetsNonPayesPageRoutingModule
  ],
  declarations: [SujetsNonPayesPage]
})
export class SujetsNonPayesPageModule {}
