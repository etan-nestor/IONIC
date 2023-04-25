import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationNPageRoutingModule } from './notification-n-routing.module';

import { NotificationNPage } from './notification-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationNPageRoutingModule
  ],
  declarations: [NotificationNPage]
})
export class NotificationNPageModule {}
