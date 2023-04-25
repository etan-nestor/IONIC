import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationNPage } from './notification-n.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationNPageRoutingModule {}
