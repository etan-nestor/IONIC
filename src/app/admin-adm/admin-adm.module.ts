import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAdmPageRoutingModule } from './admin-adm-routing.module';

import { AdminAdmPage } from './admin-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAdmPageRoutingModule
  ],
  declarations: [AdminAdmPage]
})
export class AdminAdmPageModule {}
