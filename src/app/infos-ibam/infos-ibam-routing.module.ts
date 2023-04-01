import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosIbamPage } from './infos-ibam.page';

const routes: Routes = [
  {
    path: '',
    component: InfosIbamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosIbamPageRoutingModule {}
