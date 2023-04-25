import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAdmPage } from './admin-adm.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAdmPageRoutingModule {}
