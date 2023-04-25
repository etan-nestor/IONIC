import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDevPage } from './admin-dev.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDevPageRoutingModule {}
