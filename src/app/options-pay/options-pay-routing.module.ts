import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsPayPage } from './options-pay.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsPayPageRoutingModule {}
