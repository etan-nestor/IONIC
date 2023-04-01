import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentSignUpPage } from './student-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: StudentSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentSignUpPageRoutingModule {}
