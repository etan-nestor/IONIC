import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsPayPageRoutingModule } from './options-pay-routing.module';

import { OptionsPayPage } from './options-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsPayPageRoutingModule
  ],
  declarations: [OptionsPayPage]
})
export class OptionsPayPageModule {}
