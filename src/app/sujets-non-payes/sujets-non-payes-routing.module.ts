import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SujetsNonPayesPage } from './sujets-non-payes.page';

const routes: Routes = [
  {
    path: '',
    component: SujetsNonPayesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SujetsNonPayesPageRoutingModule {}
