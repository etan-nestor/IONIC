import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosIbamPageRoutingModule } from './infos-ibam-routing.module';

import { InfosIbamPage } from './infos-ibam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosIbamPageRoutingModule
  ],
  declarations: [InfosIbamPage]
})
export class InfosIbamPageModule {}
