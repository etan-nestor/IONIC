import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDevPageRoutingModule } from './admin-dev-routing.module';

import { AdminDevPage } from './admin-dev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDevPageRoutingModule
  ],
  declarations: [AdminDevPage]
})
export class AdminDevPageModule {}
