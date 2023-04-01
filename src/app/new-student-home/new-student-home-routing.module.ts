import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewStudentHomePage } from './new-student-home.page';

const routes: Routes = [
  {
    path: '',
    component: NewStudentHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewStudentHomePageRoutingModule {}
