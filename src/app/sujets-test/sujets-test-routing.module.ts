import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SujetsTestPage } from './sujets-test.page';

const routes: Routes = [
  {
    path: '',
    component: SujetsTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SujetsTestPageRoutingModule {}
