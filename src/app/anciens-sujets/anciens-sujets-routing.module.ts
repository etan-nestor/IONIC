import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnciensSujetsPage } from './anciens-sujets.page';

const routes: Routes = [
  {
    path: '',
    component: AnciensSujetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnciensSujetsPageRoutingModule {}
