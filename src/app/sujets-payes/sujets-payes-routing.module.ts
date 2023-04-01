import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SujetsPayesPage } from './sujets-payes.page';

const routes: Routes = [
  {
    path: '',
    component: SujetsPayesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SujetsPayesPageRoutingModule {}
